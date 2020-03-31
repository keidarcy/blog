(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{386:function(t,a,s){"use strict";s.r(a);var e=s(3),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"git-commit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[t._v("#")]),t._v(" git commit")]),t._v(" "),s("p",[t._v("Fixing and amending commits")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),s("p",[t._v("it wouldn't commit again but fix first commit!")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend --reset-author\n")])])]),s("p",[t._v("change author of git commit")]),t._v(" "),s("h2",{attrs:{id:"git-reset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[t._v("#")]),t._v(" git reset")]),t._v(" "),s("p",[s("strong",[t._v("doesn't leave any record")]),t._v("\nForce to undo the last commit in a local repository, HEAD^ means return last one commit.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft HEAD^\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft 8a15r31\n")])])]),s("p",[s("code",[t._v("--hard")]),t._v(" discard changes totally.\n"),s("code",[t._v("--soft")]),t._v(" keep changes.")]),t._v(" "),s("h2",{attrs:{id:"git-revert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[t._v("#")]),t._v(" git revert")]),t._v(" "),s("p",[t._v("First undo last commit locally")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD --no-commit\n")])])]),s("p",[t._v("These will create a new commit to 'kill' the last commit, without --no-commit or -n, get into vi-mode to edit commit comment, if no editing comment will seem like")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Revert "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit comment"')]),t._v("\n    This reverts commit d7795f88ebd5bf427c4c20faa9d372c997c8e490.\n")])])]),s("h2",{attrs:{id:"git-rebase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-rebase"}},[t._v("#")]),t._v(" git rebase")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase master\n")])])]),s("p",[t._v("bring all you commits on the top of master branch")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i\n")])])]),s("p",[t._v("interactive rebasing")]),t._v(" "),s("p",[t._v("if you want to 'reset' a wrong 'interactive rebasing' go\n"),s("code",[t._v("git reflog")]),t._v(" !")]),t._v(" "),s("h2",{attrs:{id:"git-grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-grep"}},[t._v("#")]),t._v(" git grep")]),t._v(" "),s("p",[t._v("search a pattern in repo by grep command")])])}),[],!1,null,null,null);a.default=r.exports}}]);