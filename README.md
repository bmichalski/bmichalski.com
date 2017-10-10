# bmichalski.io

## Start working
```Shell
git clone git@github.com:bmichalski/bmichalski.io.git && \
cd bmichalski.io && \
git remote add site git@github.com:bmichalski/bmichalski.github.io.git
```

## Build
```Shell
yarn run build-all
```

## Deploy
```Shell
git subtree push --prefix build site master
```
