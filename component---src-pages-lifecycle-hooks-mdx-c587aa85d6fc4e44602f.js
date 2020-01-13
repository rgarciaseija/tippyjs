(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{191:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return m}));t(4),t(0);var n=t(23),c=t(93);t(1);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}const b={},p={_frontmatter:b},l=c.default;function m(e){let{components:a}=e,t=o(e,["components"]);return Object(n.b)(l,s({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Lifecycle hooks provide a way to run code in response to a certain part of a\ntippy's lifecycle. They are listed here in the usual order in which they occur.\nEvery lifecycle hook takes the ",Object(n.b)("a",s({parentName:"p"},{href:"/tippyjs/tippy-instance/"}),Object(n.b)("code",s({parentName:"a"},{className:"language-text"}),"instance"))," as its first\nargument."),Object(n.b)("p",null,"These functions are how you hook into a tippy instance's lifecycle to add\nfunctionality via a ",Object(n.b)("a",s({parentName:"p"},{href:"/tippyjs/plugins/"}),"plugin"),"."),Object(n.b)("h4",null,"onCreate"),Object(n.b)("p",null,"Executed a single time when a tippy is first created."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onCreate"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onTrigger"),Object(n.b)("p",null,"Executed when a tippy is triggered by a DOM event (e.g. mouseenter, focus,\nclick), but before it starts to show."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onTrigger"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," event"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onShow"),Object(n.b)("p",null,"Executed when a tippy begins to show, but before it gets mounted to the DOM."),Object(n.b)("p",null,"You can optionally return ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"false")," to cancel the tippy from showing."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onShow"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token control keyword"}),"return")," ",Object(n.b)("span",s({parentName:"code"},{className:"token boolean"}),"false"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// cancels it"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," plugins ignore ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"return false")," due to compositional issues. Only a\ntippy instance's own props can use this feature.")),Object(n.b)("h4",null,"onMount"),Object(n.b)("p",null,"Executed when the tippy element is mounted to the DOM."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onMount"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onShown"),Object(n.b)("p",null,"Executed when a tippy has fully transitioned in."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onShown"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onUntrigger"),Object(n.b)("p",null,"Executed when a tippy was untriggered by a DOM event (e.g. mouseleave, blur,\nclick), but before it starts to hide."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onUntrigger"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," event"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onHide"),Object(n.b)("p",null,"Executed when a tippy begins to hide and transition out."),Object(n.b)("p",null,"You can optionally return ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"false")," to cancel the tippy from hiding."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onHide"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token control keyword"}),"return")," ",Object(n.b)("span",s({parentName:"code"},{className:"token boolean"}),"false"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")," ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// cancels it"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," plugins ignore ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),"return false")," due to compositional issues. Only a\ntippy instance's own props can use this feature.")),Object(n.b)("h4",null,"onHidden"),Object(n.b)("p",null,"Executed when a tippy has fully transitioned out and unmounted from the DOM."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onHidden"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onBeforeUpdate"),Object(n.b)("p",null,"Executed before a tippy's props are updated (via ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),".setContent()")," or\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),".setProps()"),")."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onBeforeUpdate"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," updatedProps"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onAfterUpdate"),Object(n.b)("p",null,"Executed after a tippy's props are updated (via ",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),".setContent()")," or\n",Object(n.b)("code",s({parentName:"p"},{className:"language-text"}),".setProps()"),")."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onAfterUpdate"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance",Object(n.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")," updatedProps"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(n.b)("h4",null,"onDestroy"),Object(n.b)("p",null,"Executed a single time when a tippy is destroyed."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(n.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(n.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"tippy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),"reference",Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token function"}),"onDestroy"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"("),Object(n.b)("span",s({parentName:"code"},{className:"token parameter"}),"instance"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")")," ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"{"),"\n    ",Object(n.b)("span",s({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),"\n",Object(n.b)("span",s({parentName:"code"},{className:"token block"}),"}"),Object(n.b)("span",s({parentName:"code"},{className:"token block"}),")"),Object(n.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lifecycle-hooks-mdx-c587aa85d6fc4e44602f.js.map