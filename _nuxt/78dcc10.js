(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{345:function(t,e,n){var content=n(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("79da32c8",content,!0,{sourceMap:!1})},346:function(t,e,n){var content=n(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("14166c4c",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";var r=n(345);n.n(r).a},349:function(t,e,n){(e=n(20)(!1)).push([t.i,".header[data-v-2b1b9ecc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-2b1b9ecc]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-2b1b9ecc]{font-size:2rem}}.date[data-v-2b1b9ecc]{font-size:30px;color:#4d4d4d;display:flex;font-weight:400;margin:.6em 0 0}.annotation[data-v-2b1b9ecc]{font-size:.75rem;color:#707070}@media screen and (min-width: 601px){.annotation[data-v-2b1b9ecc]{margin:0 0 1em auto}}",""]),t.exports=e},350:function(t,e,n){var content=n(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("15010084",content,!0,{sourceMap:!1})},352:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),l=(n(348),n(6)),c=n(51),o=n.n(c),d=n(337),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[t.icon?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),n("div",{staticClass:"date"},[n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])]),t._v(" "),["ja","ja-basic"].includes(t.$i18n.locale)?t._e():n("div",{staticClass:"annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])])}),[],!1,null,"2b1b9ecc",null);e.a=component.exports;o()(component,{VIcon:d.a})},354:function(t,e,n){"use strict";var r=n(346);n.n(r).a},355:function(t,e,n){(e=n(20)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},356:function(t,e,n){"use strict";n(76);var r=n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),l=(n(354),n(6)),c=n(51),o=n.n(c),d=n(337),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize/10+"rem","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;o()(component,{VIcon:d.a})},362:function(t,e,n){"use strict";var r=n(350);n.n(r).a},363:function(t,e,n){(e=n(20)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #00a63c}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=e},389:function(t,e,n){"use strict";var r=n(1).a.extend(),l=(n(362),n(6)),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},519:function(t,e,n){"use strict";n.r(e);var r=n(1),l=n(389),c=n(352),o=n(356),d=r.a.extend({components:{PageHeader:c.a,StaticCard:l.a,ExternalLink:o.a},head:function(){return{title:this.$t("お子様をお持ちの皆様へ")}}}),_=n(6),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("新型コロナウイルス感染症対応についてのお願い"))+"\n  ")]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202005280004.html#1","icon-size":24}},[t._v(t._s(t.$t("児童生徒・保護者の皆さまへ（山口県）"))+"\n      ")])],1)]),t._v(" "),n("static-card",[n("h3",[n("external-link",{attrs:{url:"https://www.mext.go.jp/a_menu/coronavirus/index.html","icon-size":24}},[t._v(t._s(t.$t("新型コロナウイルスに関連した感染症対策に関する対応について（文部科学省）"))+"\n      ")])],1)]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("学習支援コンテンツ")))]),t._v(" "),n("ul",[n("li",[n("external-link",{attrs:{url:"https://www.mext.go.jp/a_menu/ikusei/gakusyushien/index_00001.htm","icon-size":16}},[t._v(t._s(t.$t("学習支援コンテンツポータルサイト（文部科学省）"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:"https://www.learning-innovation.go.jp/covid_19/page/5/","icon-size":16}},[t._v(t._s(t.$t("学びを止めない未来の教室（経済産業省）"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cms/a50900/index/yamaguchi.html","icon-size":16}},[t._v(t._s(t.$t("やまぐち学習支援プログラム（やまぐちっ子the Movie追加）"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:"http://shien.ysn21.jp/contents/student/gakusyu/index.html","icon-size":16}},[t._v(t._s(t.$t("学習コンテンツ（やまぐち総合教育支援サイト）"))+"\n        ")])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染予防・健康管理")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("手洗い、咳エチケット等により、感染予防に努めてください。"))),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/1/4/2/142f5b06182fae366ce6e7bb2bf3d871.pdf","icon-size":16}},[t._v(t._s(t.$t("【参考】「基本は手洗い。」リーフレット"))+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://tokyodouga.jp/lViN9C_BS-0.html","icon-size":16}},[t._v(t._s(t.$t("【参考】感染症予防のための正しい手洗い方法（動画）"))+"\n        ")])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染症を疑う場合の対応")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の強い症状がある場合、または発熱や咳などの比較的軽い風邪の症状が続いている場合は、各保健所にご相談ください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("各保健所の電話番号等については「新型コロナウイルスに関連する各種相談窓口について」をご確認ください。"))+"\n      ")]),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html","icon-size":16}},[t._v(t._s(t.$t("「新型コロナウイルスに関連する各種相談窓口について」"))+"\n      ")])],1)]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("子育て中の保護者及び子どものための相談窓口について")))]),t._v(" "),n("ul",[n("li",[n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/6/9/1/6919f905dd62276886c5647ec3d44f17.pdf","icon-size":16}},[t._v(t._s(t.$t("子育て中の保護者のための相談窓口一覧（チラシ）"))+"\n        ")])],1),t._v(" "),n("li",[n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/a/9/2/a92e8ea17c49a05ef2671a1c36581eb9.pdf","icon-size":16}},[t._v(t._s(t.$t("子どものための相談窓口一覧（チラシ）"))+"\n        ")])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("その他")))]),t._v(" "),n("p",[t._v(t._s(t.$t("詳細は、各学校からのお知らせ等をご確認ください。")))])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);