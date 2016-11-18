# omtd-platform

## First time
`npm intall` for all the dependencies.

## Build
For development `npm run build` and it can be deployed with `npm run start` using lite-server and browsersync.

For production `npm run build_prod` and it can be deployed with `npm run serve` using simple-angular-server.

To deploy to the simple server use `npm run serve`

## Develop

To make it easier to develop with watchdog support using `npm start` make the according changes in the `index.html` file.

### Develop
Using `npm start`.

Uncomment this.
```javascript
<script src="dist/bundle.min.js"></script>
```

Comment this.
```javascript
<!--
<script>
    System.import('app').catch(function(err){ console.error(err); });
</script> 
-->
```

### Release
Using `npm run build_prod` and `npm run serve`.

Comment this.
```javascript
<!-- <script src="dist/bundle.min.js"></script> -->
```
Uncomment this.
```javascript
<script>
    System.import('app').catch(function(err){ console.error(err); });
</script> 
```
