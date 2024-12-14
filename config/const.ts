
export let SKIP_HEADER: string[] = [
    "/"
]

export let SKIP_FOOTER: string[] = [
    "/",
    "/taptoEarn"
]

export let PAGES: any = [
    { name: "", path: "/", has_footer: false, has_header: false, show_menu: false, header: "<div></div>" },
    { name: "Game", path: "/game", has_footer: true, has_header: true, show_menu: true },
    { name: "Leaderboard", path: "/leaderboard", has_footer: true, has_header: true, show_menu: true },
    { name: "Referral", path: "/referral", has_footer: true, has_header: true, show_menu: true },
    { name: "Air Drop", path: "/airdrop", has_footer: true, has_header: true, show_menu: true },
    { name: "Tasks", path: "/tasks", has_footer: true, has_header: true, show_menu: true },
]