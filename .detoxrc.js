module.exports = {
    "devices": {
      "emulator": {
        "type": "android.emulator",
        "device": {
          "avdName": "Samsung_Galaxy_A10s_API29"
        }
      }
    },
    "apps": {
      "android.debug": {
        "type": "android.apk",
        "binaryPath": "android/app/build/outputs/apk/debug/pqaa_detox.apk",
        "build": "cd android && gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd .."
      },
      "android.release": {
        "type": "android.apk",
        "binaryPath": "android/app/build/outputs/apk/release/pqaa_detox.apk",
        "build": "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd .."
      }
    },
    "configurations": {
      "android.emu.debug": {
        "device": "emulator",
        "app": "android.debug"
      },
      "android.emu.release": {
        "device": "emulator",
        "app": "android.release"
      }
    }
  }