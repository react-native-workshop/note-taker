#!/bin/bash

set -e
cur_dir=`dirname $0`

echo "BUILDING ANDROID";
cd $cur_dir/../../android &&
./gradlew clean assembleRelease -PBUILD_NAME=$BUILD_NAME -PBUILD_NUMBER=$BUILD_NUMBER && cd ..

echo "APK will be present at android/app/build/outputs/apk/app-release.apk"
