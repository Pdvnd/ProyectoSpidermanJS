
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
        [0, 80],
        [1, 0],
      ],
      translateY: [
        [0, 90],
        [0, 200],
      ]
    }
  })

  //animaciones para las imagenes debajo del logo, aca trato de que las tres imagenes tenga una animacion diferente
  lax.addElements(".izquierdo", {
    scrollY: {
      opacity: [
        [0, 80],
        [0, 1],
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
        [0, 1],
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
        [110, 160],
        [0, 1],
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
        [0, 800],
        [1, 0],
      ],
      translateY: [
        [0, 800],
        [-200, 0],
      ],
      "letter-spacing": [
        [0, 600],
        [0, 150], {
          cssUnit: "px",
        },
      ],
    },
  });

  lax.addElements(".peter-letra", {
    scrollY: {
      filter: [
        [700, 800, 900, 1000, 1100, 1200, 1300],
        [0, 20, 0, 20, 0, 20, 0],
        {
          cssFn: function (value) {
            return `drop-shadow(0 0 ${value}px red)`;
          },
        },
      ],
      translateY: [
        [1000, 1300, 6000],
        [200, "elCenterY-150"],
      ],
    },
  });
}
const container = document.querySelector("#container");
const contenedorGames = document.querySelector(".contenedor-games");
const games = [];
var plantilla = new XMLHttpRequest()
plantilla.responseType= "json"
plantilla.open("GET", "games.json")
plantilla.send()
plantilla.onload = function mostrarGames() {
  const mostrarGames = () => {
    for (const game of games) {
        container.innerHTML +=
    `<div class="col">
        <div class="card">
            <img src="${game.img}" class="card-img-top img" alt="...">
            <div class="card-body">
                <h5 class="card-title">${game.name}</h5>
                <p class="card-text">${game.platform}</p>
                <p class="card-text"><span>$ ${game.year}</span></p>
                <button onclick="masInfo()">Más info</button>
            </div>
        </div>
    </div>`
    };
  };
  mostrarGames()
}



function masInfo(){
  alert('Este inmueble actualmente esta disponible. Comuniquese con nosotros a traves del siguiente numero para obtener toda la informacion 351 872 9568')
}

