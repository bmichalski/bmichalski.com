# bmichalski.com

## Start working
```sh
git clone git@github.com:bmichalski/bmichalski.com.git && \
cd bmichalski.com && \
git remote add site git@github.com:bmichalski/bmichalski.github.io.git
```

## Install vendors
```sh
yarn install
```

## Build
```sh
yarn run build-all
```

## Deploy
```sh
git subtree push --prefix build site master
```
