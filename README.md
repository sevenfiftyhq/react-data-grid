# React Data Grid
Excel-like grid component built with React, with editors, keyboard navigation, copy &amp; paste, and the like http://adazzle.github.io/react-data-grid/  

Forked from adazzle's repo at version 2.0.24.

Installation
------------

```sh
npm install react-data-grid
```

This library is written with CommonJS modules. If you are using
browserify, webpack, or similar, you can consume it like anything else
installed from npm.

To get the unminified distribution files, make sure you have webpack installed and then run:
 ```
 node_modules/.bin/webpack --config=config/webpack.config.prod
 ```

Overview 
--------
ReactDataGrid is an advanced JavaScript spreadsheet-like grid component built using React

Features
--------

- Lightning fast virtual rendering
- [Can render hundreds of thousands of rows with no lag](http://adazzle.github.io/react-data-grid/examples.html#/one-million-rows)
- Keyboard navigation
- [Fully editable grid](http://adazzle.github.io/react-data-grid/examples.html#/editable)
- [Rich cell editors like autocomplete, checkbox and dropdown editors, complete with keyboard navigation](http://adazzle.github.io/react-data-grid/examples.html#/built-in-editors)
- Custom cell Editors - Easily create your own
- [Custom cell Formatters](http://adazzle.github.io/react-data-grid/examples.html#/custom-formatters)
- [Frozen columns](http://adazzle.github.io/react-data-grid/examples.html#/fixed-cols)
- [Resizable columns](http://adazzle.github.io/react-data-grid/examples.html#/resizable-cols)
- [Sorting](http://adazzle.github.io/react-data-grid/examples.html#/sortable-cols) 
- [Filtering] (http://adazzle.github.io/react-data-grid/examples.html#/filterable-sortable-grid) 
- [Context Menu] (http://adazzle.github.io/react-data-grid/examples.html#/context-menu)
- Copy and Paste values into other cells
- [Multiple cell updates using cell dragdown] (http://adazzle.github.io/react-data-grid/examples.html#/cell-drag-down)
- [Association of events of individual columns] (http://adazzle.github.io/react-data-grid/examples.html#/column-events)


Check out the `examples` directory to see how simple previously complex UI
and workflows are to create.

Changelog
---------

- Cmd+C/Cmd+V work for copy/paste
- Draggable header cells use canvas elements if the image does not exist in the path
- Autocomplete filter uses full string match rather than indexOf for filtering

Contributing
------------

Please see [CONTRIBUTING](CONTRIBUTING.md)

Credits 
------------
This project has been built upon the great work done by [Prometheus Research](https://github.com/prometheusresearch). For the original project, please click [here]( https://github.com/prometheusresearch/react-grid). It is released under [MIT](https://github.com/adazzle/react-data-grid/blob/master/LICENSE)
