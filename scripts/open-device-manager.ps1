# Android Studio'yu acar — Device Manager'dan AVD olusturun
Start-Process "C:\Program Files\Android\Android Studio\bin\studio64.exe"
Write-Host @"

Android Studio acildi. Bir kez yapin:

  1. More Actions (veya Tools) -> Device Manager
  2. Create Device (+) -> Pixel 8 -> Next
  3. Sistem imaji: API 34 veya 35 (Download varsa indirin) -> Next -> Finish
  4. Yanindaki Play (▶) ile emulatoru baslatin

Sonra Cursor terminalinde:

  .\scripts\android-run.ps1

"@
