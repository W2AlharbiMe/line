/**
  _      _              ______       _                _____      _       _         
 | |    (_)            |  ____|     | |              |  __ \    (_)     | |        
 | |     _ _ __   ___  | |__   _ __ | |_ _ __ _   _  | |__) |__  _ _ __ | |_       
 | |    | | '_ \ / _ \ |  __| | '_ \| __| '__| | | | |  ___/ _ \| | '_ \| __|      
 | |____| | | | |  __/ | |____| | | | |_| |  | |_| | | |  | (_) | | | | | |_       
 |______|_|_| |_|\___| |______|_| |_|\__|_|   \__, | |_|   \___/|_|_| |_|\__|      
 |  _ \      (_) | |   |  _ \ \   / /          __/ |                               
 | |_) |_   _ _| | |_  | |_) \ \_/ (_)        |___/                                
 |  _ <| | | | | | __| |  _ < \   /                                                
 | |_) | |_| | | | |_  | |_) | | |  _                                              
 |____/ \__,_|_|_|\__| |____/  |_| (_)                                             
           _         _       _ _       _                _ _                _     _ 
     /\   | |       | |     | | |     | |         /\   | | |              | |   (_)
    /  \  | |__   __| |_   _| | | __ _| |__      /  \  | | |__   __ _ _ __| |__  _ 
   / /\ \ | '_ \ / _` | | | | | |/ _` | '_ \    / /\ \ | | '_ \ / _` | '__| '_ \| |
  / ____ \| |_) | (_| | |_| | | | (_| | | | |  / ____ \| | | | | (_| | |  | |_) | |
 /_/    \_\_.__/ \__,_|\__,_|_|_|\__,_|_| |_| /_/    \_\_|_| |_|\__,_|_|  |_.__/|_|
                                                                                   
                                                                                   
*/

// powered by Alpinejs...
import Alpine from 'alpinejs';

import countdown from './components/countdown';
import counter from './components/counter';
import typingEffect from './components/typingEffect';

// TODO[FEAT]: lazily load component
const components = {
  countdown,
  counter,
  typingEffect,
};

delete Alpine.version;

const line = Alpine;

window.line = line;
window.components = components;

line.start();
