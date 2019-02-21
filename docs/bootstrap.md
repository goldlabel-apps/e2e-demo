## [Tennis Challenge Sydney](./index.md)

# Bootstrap Environment

We're going to create a React App which can be run and 
tested automatically by [e2e](./e2e.md).

The react is bootstrapped from 
[create-react-app](./bootstrap.md) 
and then the e2e capability is added.

The process is quick as it just involves cloning 
https://github.com/listingslab-software/react-e2e

Let's do that now

```
git clone https://github.com/listingslab-software/react-e2e
cd react-e2e
cp src <this-project>
cp public <this-project>
cp e2e <this-project>
cp nightwatch.conf.js <this-project>
cp package.json <this-project>
cd ../
rm -rf react-e2e
```