# Testinger — Android emülatör + Expo
$sdk = "$env:LOCALAPPDATA\Android\Sdk"
$java = "C:\Program Files\Android\Android Studio\jbr"

$env:ANDROID_HOME = $sdk
$env:JAVA_HOME = $java
$env:NODE_OPTIONS = "--use-system-ca"
$env:Path = "$sdk\cmdline-tools\latest\bin;$sdk\platform-tools;$sdk\emulator;$java\bin;" + $env:Path

$avds = & "$sdk\emulator\emulator.exe" -list-avds 2>$null
if (-not $avds -or $avds.Count -eq 0) {
    Write-Host ""
    Write-Host "Henuz sanal cihaz (AVD) yok." -ForegroundColor Yellow
    Write-Host "Android Studio aciliyor -> Device Manager -> Create Device -> Play" -ForegroundColor Cyan
    Write-Host ""
    Start-Process "C:\Program Files\Android\Android Studio\bin\studio64.exe"
    exit 1
}

$avd = $avds[0]
Write-Host "Emulator baslatiliyor: $avd" -ForegroundColor Green
Start-Process -FilePath "$sdk\emulator\emulator.exe" -ArgumentList "-avd", $avd -WindowStyle Normal

Write-Host "Emulator acilana kadar bekleniyor (60 sn)..." -ForegroundColor Gray
$adb = "$sdk\platform-tools\adb.exe"
$ready = $false
1..30 | ForEach-Object {
    Start-Sleep -Seconds 2
    $devices = & $adb devices 2>$null
    if ($devices -match "emulator-\d+\s+device") { $ready = $true; break }
}
if (-not $ready) {
    Write-Host "Emulator henuz hazir degil; yine de Expo deneniyor..." -ForegroundColor Yellow
}

Set-Location (Split-Path $PSScriptRoot -Parent)
npm run android
