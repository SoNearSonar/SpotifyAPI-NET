"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1385],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=s(a),d=n,c=k["".concat(p,".").concat(d)]||k[d]||m[d]||l;return a?r.createElement(c,o(o({ref:t},u),{},{components:a})):r.createElement(c,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6455:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return m}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={id:"library",title:"Library",sidebar_label:"Library"},p=void 0,s={unversionedId:"web/library",id:"version-5.1.1/web/library",title:"Library",description:"SaveTracks",source:"@site/versioned_docs/version-5.1.1/web/library.md",sourceDirName:"web",slug:"/web/library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/library.md",tags:[],version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1665495835,formattedLastUpdatedAt:"10/11/2022",frontMatter:{id:"library",title:"Library",sidebar_label:"Library"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Follow",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/follow"},next:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization"}},u={},m=[{value:"SaveTracks",id:"savetracks",level:2},{value:"SaveTrack",id:"savetrack",level:2},{value:"GetSavedTracks",id:"getsavedtracks",level:2},{value:"RemoveSavedTracks",id:"removesavedtracks",level:2},{value:"CheckSavedTracks",id:"checksavedtracks",level:2},{value:"SaveAlbums",id:"savealbums",level:2},{value:"SaveAlbum",id:"savealbum",level:2},{value:"GetSavedAlbums",id:"getsavedalbums",level:2},{value:"RemoveSavedAlbums",id:"removesavedalbums",level:2},{value:"CheckSavedAlbums",id:"checksavedalbums",level:2}],k={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"savetracks"},"SaveTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Save one or more tracks to the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.SaveTracks(new List<string> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"savetrack"},"SaveTrack"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Save one track to the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"A Spotify ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"3Hvu1pq89D4R0lyPBoujSv"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.SaveTrack("3Hvu1pq89D4R0lyPBoujSv");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getsavedtracks"},"GetSavedTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get a list of the songs saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the first object to return. Default: 0 (i.e., the first object)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DE"))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Paging<SavedTrack>**, **SavedTrack")," contains 2 properties, ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime AddedAt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"FullTrack Track")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"Paging<SavedTrack> savedTracks = _spotify.GetSavedTracks();\nsavedTracks.Items.ForEach(track => Console.WriteLine(track.Track.Name));\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"removesavedtracks"},"RemoveSavedTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remove one or more tracks from the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.RemoveSavedTracks(new List<string> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"checksavedtracks"},"CheckSavedTracks"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Check if one or more tracks is already saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "3Hvu1pq89D4R0lyPBoujSv" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ListResponse<bool>")," which contains a property, ",(0,l.kt)("inlineCode",{parentName:"p"},"List<bool> List")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ListResponse<bool> tracksSaved = _spotify.CheckSavedTracks(new List<String> { "3Hvu1pq89D4R0lyPBoujSv" });\nif(tracksSaved.List[0])\n    Console.WriteLine("The track is in your library!");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"savealbums"},"SaveAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Save one or more albums to the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.SaveAlbums(new List<string> { "1cq06d0kTUnFmJHixz1RaF" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"savealbum"},"SaveAlbum"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Save one album to the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"A Spotify ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"1cq06d0kTUnFmJHixz1RaF"'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.SaveAlbum("1cq06d0kTUnFmJHixz1RaF");\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"getsavedalbums"},"GetSavedAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Get a list of the albums saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of objects to return. Default: 20. Minimum: 1. Maximum: 50."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"20"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the first object to return. Default: 0 (i.e., the first object)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[market]"),(0,l.kt)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DE"))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"Paging<SavedAlbum>"),", ",(0,l.kt)("strong",{parentName:"p"},"SavedAlbum")," contains 2 properties, ",(0,l.kt)("inlineCode",{parentName:"p"},"DateTime AddedAt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"FullAlbum Album")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"Paging<SavedAlbum> savedAlbums = _spotify.GetSavedAlbums();\nsavedAlbums.Items.ForEach(album => Console.WriteLine(album.Album.Name));\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"removesavedalbums"},"RemoveSavedAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Remove one or more albums from the current user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ErrorResponse")," which just contains a possible error. (",(0,l.kt)("inlineCode",{parentName:"p"},"response.HasError()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"response.Error"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse response = _spotify.RemoveSavedAlbums(new List<string> { "1cq06d0kTUnFmJHixz1RaF" });\nif(!response.HasError())\n    Console.WriteLine("success");\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"checksavedalbums"},"CheckSavedAlbums"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Check if one or more albums is already saved in the current Spotify user\u2019s \u201cYour Music\u201d library.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ids"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of the Spotify IDs."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'new List<String> { "1cq06d0kTUnFmJHixz1RaF" }'))))),(0,l.kt)("p",null,"Returns a ",(0,l.kt)("inlineCode",{parentName:"p"},"ListResponse<bool>")," which contains a property, ",(0,l.kt)("inlineCode",{parentName:"p"},"List<bool> List")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ListResponse<bool> albumsSaved = _spotify.CheckSavedAlbums(new List<String> { "1cq06d0kTUnFmJHixz1RaF" });\nif(albumsSaved.List[0])\n    Console.WriteLine("The album is in your library!");\n')),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);