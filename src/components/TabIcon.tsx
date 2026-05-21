import { StyleSheet, View } from "react-native";

export type TabIconName = "discover" | "tests" | "friends" | "profile";

type TabIconProps = {
  name: TabIconName;
  color: string;
  size?: number;
};

/**
 * Bağımlılık eklemeden, View geometrisiyle çizilmiş minimal tab ikonları.
 * Aktif/pasif renk `color` üzerinden yönetilir.
 */
export function TabIcon({ name, color, size = 22 }: TabIconProps) {
  const stroke = 2;

  if (name === "discover") {
    // Pusula: yuvarlak çerçeve + içinde döndürülmüş diamond
    return (
      <View style={[styles.box, { width: size, height: size }]}>
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: stroke,
            borderColor: color,
          }}
        />
        <View
          style={{
            position: "absolute",
            width: size * 0.55,
            height: size * 0.55,
            transform: [{ rotate: "45deg" }],
            borderWidth: stroke,
            borderColor: color,
            borderRadius: 2,
          }}
        />
      </View>
    );
  }

  if (name === "tests") {
    // Üst üste binmiş iki kart
    return (
      <View style={[styles.box, { width: size, height: size }]}>
        <View
          style={{
            position: "absolute",
            top: 2,
            left: 2,
            width: size - 8,
            height: size - 6,
            borderRadius: 4,
            borderWidth: stroke,
            borderColor: color,
            opacity: 0.55,
            transform: [{ rotate: "-8deg" }],
          }}
        />
        <View
          style={{
            position: "absolute",
            top: 4,
            left: 6,
            width: size - 8,
            height: size - 6,
            borderRadius: 4,
            borderWidth: stroke,
            borderColor: color,
            backgroundColor: "transparent",
          }}
        />
      </View>
    );
  }

  if (name === "friends") {
    // Üst üste binen iki yuvarlak (iki kişi)
    const dot = size * 0.62;
    return (
      <View style={[styles.box, { width: size, height: size }]}>
        <View
          style={{
            position: "absolute",
            left: 0,
            width: dot,
            height: dot,
            borderRadius: dot / 2,
            borderWidth: stroke,
            borderColor: color,
          }}
        />
        <View
          style={{
            position: "absolute",
            right: 0,
            width: dot,
            height: dot,
            borderRadius: dot / 2,
            borderWidth: stroke,
            borderColor: color,
            backgroundColor: "transparent",
          }}
        />
      </View>
    );
  }

  // profile: yuvarlak baş + altta yuvarlak omuz
  const head = size * 0.45;
  return (
    <View style={[styles.box, { width: size, height: size }]}>
      <View
        style={{
          position: "absolute",
          top: 1,
          width: head,
          height: head,
          borderRadius: head / 2,
          borderWidth: stroke,
          borderColor: color,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: size * 0.92,
          height: size * 0.5,
          borderTopLeftRadius: size,
          borderTopRightRadius: size,
          borderWidth: stroke,
          borderColor: color,
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
});
