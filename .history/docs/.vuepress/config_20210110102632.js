module.exports = {
    title: 'Mercury',
    description: 'Welcome to Mercury Nook',
    head: [
        ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
    ],
    serviceWorker: true,
    themeConfig: {
        logo: '/assets/img/logo.png',
        repo: 'https://github.com/7777sea/7777sea.github.io',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/blog1.html' },
            { text: 'Record', link: '/record/' },
        ],
        sidebar: {
            "/articles/": [
              "/articles/home.html",
            ],
            "/blog/": [
                ["/blog/blog1.html", '前言'],
                {
                    title: '数据结构',   
                    path: '/blog/stack.html',  
                    collapsable: false, 
                    sidebarDepth: 2,  
                    children: [
                      ['/blog/stack.html', '栈'],
                      ['/blog/heap.html', '堆'],
                      ['/blog/list.html', '链表'],
                      ['/blog/hash.html', '哈希表']
                    ]
                },
            ]
        },
        sidebarDepth: 2,
        smoothScroll: true,
    }
}