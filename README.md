# MoEVing

## Steps to Run Project (assuming Android Studio is Installed on the System):

1. Clone the git Repository using clone command :
git clone https://github.com/Aryan-Dixit/MoEVing.git

2. Install node dependencies :
npm install

3. Start Metro Server :
npx react-native start

4. Build android project :
npx react-native run-android


## Steps to Build APK:

1. Switch to Android folder from Project Folder:
cd android

2. Build APK :
./gradlew assembleRelease

3. Find APK file in following location :
/MoEVing/android/app/build/outputs/apk/release/app-release.apk
