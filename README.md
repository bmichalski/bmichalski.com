#bmichalski.io

##How to start working
```Shell
git clone --recursive git@github.com:bmichalski/bmichalski.io.git && \
cd bmichalski.io/build && \
git checkout master && \
cd .. && \
rm -rf build/*
```

##How to build
```Shell
yarn run build-all
```