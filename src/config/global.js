export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Manejo de excepciones y eventos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Manejo de excepciones y eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de excepciones',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo de eventos en GUI',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ceballos Sierra, F. J. (2018). Programación orientada a objetos con C++: (5 ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106519?page=1',
    },
    {
      referencia:
        'López Goytia, J. L. (2015). Programación orientada a objetos C++ y Java: un acercamiento interdisciplinario: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39461?page=1',
    },
    {
      referencia:
        'Moreno Pérez, J. C. (2015). Programación orientada a objetos: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106461?page=1',
    },
    {
      referencia:
        'Oviedo Regino, E. M. (2015). Lógica de programación orientada a objetos: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70431?page=1',
    },
    {
      referencia:
        'Ruiz Rodríguez, R. (2009). Fundamentos de la programación orientada a objetos: una aplicación a las estructuras de datos en Java: ( ed.). El Cid Editor.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/34869?page=9',
    },
    {
      referencia:
        'Vélez Serrano, J. (2011). Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java: ( ed.). Dykinson.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63076?page=1',
    },
    {
      referencia:
        'Cruz, R. (2020, 28 de octubre). Manejo de Excepciones. [Vídeo]. YouTube.',
      link: 'https://youtu.be/Wnn6RZ4opfA',
    },
    {
      referencia:
        'Castillo, L. (2020, 16 de agosto). Manejo de excepciones en Java (try-catch). [Vídeo]. YouTube.',
      link: 'https://youtu.be/7XeQBBcaFZQ',
    },
    {
      referencia:
        'Lopez, M. (2020, 20 de noviembre). GUI + BD (16 : Validaciones De Campos "Importante De Ver!!"). [Vídeo]. YouTube.',
      link: 'https://youtu.be/ArVVh9_h26U',
    },
    {
      referencia:
        'Hernández, J. (2019, 10 de abril). Ejercicio para agregar un Listener a un JButton. [Vídeo]. YouTube.',
      link: 'https://youtu.be/YIo-J1O42ec',
    },
    {
      referencia:
        'Bueno. D. (2021, 19 de marzo). introducción a la Depuración en Java (usando Eclipse). [Vídeo]. YouTube.',
      link: 'https://youtu.be/5FTFSQn-I7M',
    },
    {
      referencia:
        'Software Guru. (2014, 29 de octubre). ¿Cómo convertirse en un tester de verdad?. [Vídeo].',
      link: 'https://youtu.be/UMMMWaP7ejU',
    },
  ],
  glosario: [
    {
      termino: 'ActionListener',
      significado:
        'Es una interfaz que define el método actionPerformed(), el cual es invocado cuando ocurre una acción, como hacer clic en un botón.',
    },
    {
      termino: 'Bloque catch',
      significado:
        'Es una sección de código que maneja una excepción específica lanzada en el bloque try correspondiente.',
    },
    {
      termino: 'Bloque finally',
      significado:
        'Es una sección opcional de código que se ejecuta siempre, independientemente de si se lanzó una excepción o no.',
    },
    {
      termino: 'Bloque try',
      significado:
        'Es una sección de código que puede lanzar una excepción. Si se lanza una excepción, la ejecución se transfiere inmediatamente al bloque catch correspondiente.',
    },
    {
      termino: 'Clase Exception',
      significado:
        'Es la superclase de todas las excepciones. Es una subclase directa de Throwable.',
    },
    {
      termino: 'Clase RuntimeException',
      significado:
        'Es una subclase de Exception que representa excepciones que pueden ocurrir durante el funcionamiento normal del programa Java.',
    },
    {
      termino: 'Clase Throwable',
      significado:
        'Es la superclase de todas las excepciones y errores en Java.',
    },
    {
      termino: 'Depuración (debugging)',
      significado:
        'Es el proceso de encontrar y corregir errores (bugs) en el código.',
    },
    {
      termino: 'Diseño orientado a eventos (Event-Driven Programming)',
      significado:
        'Es un paradigma de programación donde el flujo del programa está determinado por eventos.',
    },
    {
      termino: 'Error',
      significado:
        'Es una condición grave que la aplicación no debería intentar manejar, como un error de memoria.',
    },
    {
      termino: 'Excepciones no verificadas (Unchecked Exceptions)',
      significado:
        'Son excepciones que no necesitan ser declaradas en la firma de un método o manejadas explícitamente. Típicamente heredan de RuntimeException.',
    },
    {
      termino: 'Excepciones personalizadas',
      significado:
        'Son clases de excepción definidas por el desarrollador para representar condiciones de error específicas de la aplicación.',
    },
    {
      termino: 'Excepciones verificadas (Checked Exceptions)',
      significado:
        'Son excepciones que deben ser manejadas o declaradas en la firma del método.',
    },
    {
      termino: 'GUI (Graphical User Interface)',
      significado:
        'Es una interfaz de usuario que permite a los usuarios interactuar con los programas a través de elementos gráficos como botones e íconos.',
    },
    {
      termino: 'IDE (Integrated Development Environment)',
      significado:
        'Es una aplicación de software que proporciona herramientas integrales para facilitarle a los programadores el desarrollo de software.',
    },
    {
      termino: 'Interfaz de escucha (Listener Interface)',
      significado:
        'Define los métodos que deben implementarse para manejar eventos específicos.',
    },
    {
      termino: 'KeyListener',
      significado:
        'Es una interfaz que define métodos que son invocados cuando ocurre un evento de teclado, como presionar o soltar una tecla.',
    },
    {
      termino: 'Listeners (oyentes)',
      significado:
        'Son objetos que implementan una interfaz de escucha y son notificados cuando ocurre un evento.',
    },
    {
      termino: 'Logging (registro)',
      significado:
        'Es el acto de grabar eventos que ocurren durante la ejecución de un programa, generalmente con propósitos de debugging o auditoría.',
    },
    {
      termino: 'MouseListener',
      significado:
        'Es una interfaz que define métodos que son invocados cuando ocurre un evento del mouse, como un clic o un movimiento del mouse.',
    },
    {
      termino: 'Palabra clave throw',
      significado: 'Se usa para lanzar explícitamente una excepción.',
    },
    {
      termino: 'Palabra clave throws',
      significado:
        'Se usa en la firma del método para declarar las excepciones que un método podría lanzar.',
    },
    {
      termino: 'Pruebas unitarias',
      significado:
        'Son un método de prueba de software mediante el cual se prueban unidades individuales de código fuente para determinar si son aptas para su uso.',
    },
    {
      termino: 'Punto de ruptura (breakpoint)',
      significado:
        'Es un punto marcado en el código donde la ejecución se detendrá para permitir la inspección de los valores de las variables.',
    },
    {
      termino: 'Traza (trace)',
      significado:
        'Es una herramienta de depuración que registra la secuencia de instrucciones ejecutadas durante la ejecución de un programa.',
    },
  ],
}
