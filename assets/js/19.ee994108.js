(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{371:function(s,a,t){"use strict";t.r(a);var r=t(1),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("ul",[t("li",[s._v("PHP のランダムジェネレータは"),t("a",{attrs:{href:"https://github.com/fzaninotto/Faker",target:"_blank",rel:"noopener noreferrer"}},[s._v("fzaninotto/Faker"),t("OutboundLink")],1),s._v("は有名だと思いますが、名前などの日本語バージョンもあります。")]),s._v(" "),t("li",[s._v("でも、単語、住所、メールなども色々欲しい！")]),s._v(" "),t("li",[s._v("無かったので、"),t("code",[s._v("fzaninotto/Faker")]),s._v("を利用して、作りました。")])])]),s._v(" "),t("p",[s._v("➡︎ "),t("a",{attrs:{href:"https://github.com/xyyolab/faker-japanese",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github⛩"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"インストール"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#インストール"}},[s._v("#")]),s._v(" インストール")]),s._v(" "),t("p",[s._v("コンポーザー利用、インストール")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("composer require xyyo/faker-japanese\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"使い方-ほぼ全ての例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使い方-ほぼ全ての例"}},[s._v("#")]),s._v(" 使い方(ほぼ全ての例)")]),s._v(" "),t("ul",[t("li",[s._v("元々日本語特定用の"),t("code",[s._v("Faker\\Factory::create('ja_JP')")]),s._v("は不要")]),s._v(" "),t("li",[s._v("全てのロジックは自分のプロバイダーに")])]),s._v(" "),t("p",[s._v("以下の例をご覧ください。")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("See More")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token php language-php"}},[t("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// psr-4 クラスのオートロード")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("require_once")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'vendor/autoload.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Faker\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Faker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Japanese")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// テキスト関連")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 薄橙\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("kanji")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 悠\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("word")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 給料\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("idiom")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 画竜点睛\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("pokemon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" スリーパー\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("realText")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 大きな望遠鏡ぼうえんきょうで銀河ぎんがをよっく調しらべると銀河ぎんがはだいたい何でしょう。\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// インターネット関連")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("domainName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" saito"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("org\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("url")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hiroshi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("email")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" hirokawa@yahoo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("co"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("jp\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("userFirstName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" osamu\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("userLastName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yamada\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("userName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" yamaguchi chiyo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// アドレス関連")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("bank")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 北九州銀行\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("postcode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("869")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5565")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("country")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 合衆国領有小離島\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("prefecture")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 三重県\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("ward")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 西区\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("city")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 松本市\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("streetAddress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 西之園町"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("secondaryAddress")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 吉田コーポ"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v("号\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("address")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 佐賀県山口市南区中村町"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("addressWithCode")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("304")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6851")]),s._v("  奈良県田中市南区佐藤町"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 若松ハイツ"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),s._v("号\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 人間関連")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("phone")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00332")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0234")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("company")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 有限会社佐々木木材\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("lastName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 渡辺\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 太一\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 明美\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 松本 涼平\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 村山 春香\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("lastKanaName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ツダ\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstKanaName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ヨウスケ\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("firstKanaName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" モモコ\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kanaName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ナカジマ ミツル\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kanaName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ナカムラ ハルカ\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br")])])]),s._v(" "),t("h4",{attrs:{id:"laravel-の-factory-の使い方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laravel-の-factory-の使い方"}},[s._v("#")]),s._v(" Laravel の Factory の使い方")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// UserFactory.php")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$factory")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("User"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Faker "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// add this simple line here")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addProvider")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Faker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Japanese")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'email'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$faker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unique")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("safeEmail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h5",{attrs:{id:"tinker-ですぐ確認しましょう"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tinker-ですぐ確認しましょう"}},[s._v("#")]),s._v(" tinker ですぐ確認しましょう !")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("Psy Shell v0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.12")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PHP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.3")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".13")]),s._v(" — cli"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" by Justin Hileman\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("factory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("App\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Illuminate\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("Database"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Eloquent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Collection")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("#3330")]),s._v("\n     all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n       App\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("#3326")]),s._v("\n         name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"宮沢 直人"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"satomi.xidao@example.org"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         email_verified_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         updated_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         created_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       App\\"),t("span",{pre:!0,attrs:{class:"token package"}},[s._v("User")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token shell-comment comment"}},[s._v("#3335")]),s._v("\n         name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"大垣 智也"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"tsubasa08@example.org"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         email_verified_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         updated_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         created_at"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[s._v('"2020-02-17 12:21:38"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n         id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);