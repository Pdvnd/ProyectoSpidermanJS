//aqui estoy haciendo la funcion para que cada vez que baje haga el efecto que quiero
window.onload = function () {
    window.addEventListener('scroll', e => {
        console.log(window.scrollY)
    });

    //aqui estoy llamando la biblioteca que me va a ayudar para hacer los efectos 3D
    lax.init();
    lax.addDriver("scrollY", function () {
        return window.scrollY;
    });
    //animacion del primer logo
    lax.addElements(".logo", {
        scrollY: {
            scale: [
                [0, 90],
                [1, 3],
            ],
            opacity: [
                [0, 80 ],
                [1, 0 ],
            ],
            translateY: [
                [0, 90],
                [0, 200 ],
            ]
        }
    })

    //animaciones para las imagenes debajo del logo, aca trato de que las tres imagenes tenga una animacion diferente
lax.addElements(".izquierdo", {
    scrollY: {
        opacity: [
            [0, 80 ],
            [0, 1 ],
        ],
        translateY: [
            [0, 400],
            [0, 80],
        ]
    }
})
lax.addElements(".centro", {
    scrollY: {
        opacity: [
            [70, 120],
            [0, 1 ],
        ],
        translateY: [
            [0, 400],
            [0, -80],
        ]
    }
})
lax.addElements(".derecho", {
    scrollY: {
        opacity: [
            [110, 160 ],
            [0, 1 ],
        ],
        translateY: [
            [0, 400],
            [0, 85],
        ]
    }
})
lax.addElements(".nombre", {
    scrollY: {
        opacity: [
            [0, 800 ],
            [1, 0 ],
        ],
        translateY: [
            [0, 800],
            [-200, 0],
        ],
        "letter-spacing": [
            [0, 600],
            [0, 150],{
                cssUnit: "px",
            }
        ]
    }
})
}
