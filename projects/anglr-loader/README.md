###Description
anglr-loader is a generic angular component that provides minimilistic layout/placeholder to place any page loader/ spinner on the screen.

### Features

- Supports angular template as input to place loader/spinner.
- **Overlay**: Overlya can be turned on off.
- **Always center mode**: Always center mode makes the placeholder always appear on center. This can be configured turned on or off.

# Installation
Inside your angular project 
####Run
`$ npm install anglr-loader --save`

####Import AnglrLoaderModule
Add import statements to your root module.
```javascript
import { AnglrLoaderModule } from 'anglr-loader';
```

Add AnglrLoaderModule in your imports.
```
imports: [
    BrowserModule,
    AppRoutingModule,
    AnglrLoaderModule
  ],
````

#Usage
```
<anglr-loader 
	[visible]="loader" 
	[overlay]="false" 
	[template]="loaderTemplate">
</anglr-loader>

<ng-template #loaderTemplate>
  <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=790b76116006a614443ce2165a6581b2515fafb929f5bc80&rid=giphy.gif"/>
</ng-template>
```

####Inputs

- **visible: *boolean***  - Turns loader/spinner on or off.
- **overlay : *boolean***  - Turns overlay on and off.
- **alwaysCenter: *boolean***  - Turns always center mode on or off.
- **template: *TemplateRef*  ** - Expects template ref object of the spinner/ loader.

####Report Issues
[Angular loader issues](https://github.com/ajazhmd/anglr-loader-demo/issues "Angular loader issues")
