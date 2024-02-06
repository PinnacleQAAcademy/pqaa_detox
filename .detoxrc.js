module.exports = {
    apps: {
        'ios.debug': {
            type: 'ios.app',
            binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/pqaa_detox.app',
            build: 'xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
        },
        'ios.release': {
            type: 'ios.app',
            binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/pqaa_detox.app',
            build: 'xcodebuild -workspace ios/pqaa_detox.xcworkspace -scheme pqaa_detox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
        },
        'android.debug': {
            type: 'android.apk',
            binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
            build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug'
        },
        'android.release': {
            type: 'android.apk',
            binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
            build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release'
        },
    },

    devices: {
        simulator: {
          type: 'ios.simulator',
          device: {
            type: 'iPhone 14 Pro',
          },
        },
        attached: {
          type: 'android.attached',
          device: {
            adbName: '.*',
          },
        },
        emulator: {
          type: 'android.emulator',
          device: {
            avdName: 'Pixel',
          },
        },
      },

    configurations: {
        "ios.sim.debug": {
            "device": "simulator",
            "app": "ios.debug"
        },
        "ios.sim.release": {
            "device": "simulator",
            "app": "ios.release"
        },
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