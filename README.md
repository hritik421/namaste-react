# Namaste React with Hritik



# Parcel
- Dev Build
- Local Server
- HMR ==> Hot Module Replacement
- Doing HMR because of File Watching Algorithms --> written in C++
- Caching --> Faster Builds
- Image Optimization
- Minification during prod build
- Bundling
- Compressing
- consistent hashing
- Code splitting
- Differential bundling - supports older browser
- Tree Shaking - remove unused code

# Types of exports ==> 2

1- Default export/import
export default Component;
import Component from "path";

2- Named export/import
export const Component -- while initializing
import {Component} from "path";

# React Hooks
(Normal JS utility function)
2 most used hooks
-useState() - Superpowerful state Variables in React
-useEffect()