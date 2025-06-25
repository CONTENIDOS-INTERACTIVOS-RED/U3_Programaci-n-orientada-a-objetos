<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Manejo de eventos en GUI'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-4

        .col-12.col-xl-8
          p.mb-4 En las interfaces gráficas de usuario (GUI), el manejo de eventos es fundamental para crear aplicaciones interactivas y receptivas a las acciones del usuario. Los eventos son acciones o sucesos que ocurren en la interfaz de usuario, como clics de ratón, pulsaciones de teclas, movimientos del mouse, entre otros.
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-35.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 El manejo de eventos en GUI se basa en el diseño orientado a eventos (<i>Event-Driven Programming</i>), donde el flujo del programa está determinado por los eventos generados por el usuario o el sistema. Cada componente de la interfaz de usuario, como botones, cuadros de texto, menús, etc., puede tener asociados uno o más eventos. 
          span En este apartado, se explorarán los conceptos relacionados con el manejo de eventos en GUI, incluyendo el modelo de eventos, las clases de eventos y <i>listeners</i>, la asociación de eventos a componentes, el diseño orientado a eventos y la implementación de interfaces de escucha.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

      h2 Introducción al modelo de eventos en interfaces gráficas

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El modelo de eventos en interfaces gráficas se basa en el patrón de diseño Observer. En este modelo, los componentes de la interfaz de usuario (como botones, cuadros de texto, etc.) actúan como "sujetos" que generan eventos, mientras que los objetos que responden a esos eventos actúan como "observadores".
          .bg-azul.p-4.mb-4(data-aos='fade-up')
            span Cuando ocurre un evento, como un clic de ratón en un botón, el componente notifica a todos los observadores registrados sobre el evento. Los observadores, a su vez, ejecutan el código correspondiente para manejar ese evento específico.
          span Para Vélez Serrano (2011), el modelo de eventos en GUI permite desacoplar la lógica de la interfaz de usuario de la lógica de la aplicación, lo que facilita el desarrollo y mantenimiento de aplicaciones interactivas.
      
      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto.text-white GUI + BD
            p.mb-5(data-aos="fade-up").text-white Para ampliar el conocimiento sobre validaciones de campos, le invitamos a ver el siguiente vídeo. 
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" href="https://youtu.be/ArVVh9_h26U " target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/youtube-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> GUI + BD
          .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')

      p.mb-4 En el desarrollo de software, el modelo de eventos en GUI se utiliza ampliamente para crear aplicaciones de escritorio, aplicaciones web y aplicaciones móviles. Los frameworks y bibliotecas de GUI, como Java Swing, JavaFX, Android SDK y iOS SDK, proporcionan mecanismos para manejar eventos de manera eficiente.

      p.mb-4 <b>Figura 6.</b> Ejemplo de modelo de eventos en Java Swing

      .row.mb-4.bg-azul.py-4
        .col-10.col-md-8.col-lg-6.mx-auto
          img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

      h2 Clases de eventos y <i>listeners</i>
      p.mb-4 En la programación orientada a eventos, las clases de eventos representan los diferentes tipos de eventos que pueden ocurrir en una interfaz gráfica de usuario. Cada clase de evento encapsula información específica sobre el evento, como el componente que generó el evento, las coordenadas del mouse, las teclas presionadas, entre otros. Algunas clases de eventos comunes en Java Swing incluyen:

      ImagenInfografica.color-secundario.mb-4.bg-white
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-40.png', alt='Descripción de la imagen')
        .tarjeta.bg-white.p-4(x='87.4%' y='33%' numero='+')
          .h5.mb-2 ActionEvent
          p Representa una acción, como hacer clic en un botón o seleccionar un elemento del menú.
        .tarjeta.bg-white.p-4(x='13%' y='33%' numero='+')
          .h5.mb-2 MouseEvent
          p Representa interacciones con el mouse, como clics, movimientos o arrastres.
        .tarjeta.bg-white.p-4(x='13%' y='83.6%' numero='+')
          .h5.mb-2 KeyEvent
          p Representa interacciones con el teclado, como presionar o soltar una tecla.
        .tarjeta.bg-white.p-4(x='87.4%' y='83.4%' numero='+')
          .h5.mb-2 WindowEvent
          p Representa eventos relacionados con la ventana, como abrir, cerrar o cambiar su tamaño.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Los <i>listeners</i> son interfaces que definen los métodos que se deben implementar para manejar eventos específicos. Cada clase de evento tiene su propio <i>listener</i> asociado. Por ejemplo, la interfaz ActionListener define el método actionPerformed() para manejar eventos de acción.
          .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-41.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 De acuerdo con Moreno Pérez (2015), los <i>listeners</i> permiten definir el comportamiento de la aplicación en respuesta a los eventos generados por el usuario o el sistema.
          span En el desarrollo de <i>software</i>, se implementan los <i>listeners</i> correspondientes a los eventos que se desean manejar en la interfaz gráfica de usuario. Los <i>listeners</i> se registran en los componentes utilizando los métodos addXXXListener(), donde XXX representa el nombre del <i>listener</i> específico.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 7.</b>Ejemplo de implementación de un <i>listener</i> de eventos de mouse

      .row.mb-4.bg-azul.py-4
        .col-11.col-md-9.col-lg-8.mx-auto
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')


      h2 Asociar eventos a componentes
      p.mb-4 Para que los componentes de la interfaz gráfica de usuario respondan a los eventos, es necesario asociar los <i>listeners</i> correspondientes a cada componente. Esto se logra utilizando los métodos addXXXListener() proporcionados por los componentes, donde XXX representa el nombre del <i>listener</i> específico. Por ejemplo, para asociar un <i>listener</i> de eventos de acción a un botón en Java Swing, se utiliza el método addActionListener():
      p.mb-4 <b>Figura 8.</b> Uso del método addActionListener()

      .row.mb-4.bg-azul.py-4
        .col-10.col-md-8.col-lg-6.mx-auto
          img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 De manera similar, se pueden asociar otros <i>listeners</i> a diferentes componentes, como MouseListener para eventos de mouse, KeyListener para eventos de teclado, entre otros.
          .bg-verde.p-4(data-aos='fade-up')
            span López Goytia (2015), plantea que la asociación de eventos a componentes permite definir el comportamiento interactivo de la interfaz de usuario y responder a las acciones del usuario de manera adecuada.

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .col-12.col-xl-8.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto.text-white Ejercicio para agregar un Listener a un JButton. 
            p.mb-5(data-aos="fade-up").text-white Para ver un ejercicio aplicado sobre la temática Listener, le invitamos a ver el siguiente vídeo. 
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" href="https://youtu.be/YIo-J1O42ec" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/youtube-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Ejercicio para agregar un Listener a un JButton. 
          .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

      p.mb-4 En el desarrollo de <i>software</i>, es importante identificar los eventos relevantes para cada componente de la interfaz de usuario y asociar los <i>listeners</i> correspondientes. Esto permite crear aplicaciones interactivas y receptivas a las acciones del usuario. 

      p.mb-4 <b>Figura 9.</b> Ejemplo de asociación de eventos a componentes

      .row.mb-4.bg-azul.py-4
        .col-11.col-md-9.col-lg-8.mx-auto
          img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')

      h2 Diseño orientado a eventos (<i>Event-Driven Programming</i>)

      .row.mb-4
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 El diseño orientado a eventos es un paradigma de programación en el que el flujo del programa está determinado por los eventos generados por el usuario o el sistema. En lugar de seguir un flujo secuencial predefinido, el programa responde a los eventos a medida que ocurren.
          .bg-amarillo.p-4(data-aos='fade-up')
            span En el diseño orientado a eventos, los componentes de la interfaz gráfica de usuario generan eventos en respuesta a las acciones del usuario, como clics de botones, selecciones de menú, movimientos del mouse, entre otros. Estos eventos son capturados por los <i>listeners</i> correspondientes, que ejecutan el código asociado para manejar cada evento.

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Según Oviedo Regino (2015), el diseño orientado a eventos permite crear aplicaciones flexibles y modulares, donde la lógica de la aplicación está desacoplada de la interfaz de usuario.
          .bg-morado.p-4(data-aos='fade-up')
            span En el desarrollo de <i>software</i>, el diseño orientado a eventos se utiliza ampliamente en la creación de aplicaciones de GUI, así como en la programación de sistemas reactivos y en tiempo real. Los <i>frameworks</i> y bibliotecas de GUI, como Java Swing, JavaFX, Qt y Windows Forms, se basan en el diseño orientado a eventos para facilitar el desarrollo de interfaces de usuario interactivas.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 10.</b> Ejemplo de diseño orientado a eventos en una aplicación de calculadora

      .row.mb-4.bg-azul.py-4
        .col-10.col-md-8.col-lg-6.mx-auto
          img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')

      .row.bg-fondo-1.bg-full-width.py-4.mb-4
        div.px-5

          h2 Implementación de interfaces de escucha (ActionListener, MouseListener, etc.)
          p.mb-4 La implementación de interfaces de escucha es una parte fundamental del manejo de eventos en GUI. Las interfaces de escucha definen los métodos que se deben implementar para manejar eventos específicos. Algunas de las interfaces de escucha comunes incluyen:
          .row.mb-4.justify-content-center
            .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-51.svg', style='width: 80px')
                p.text-bold.mb-4.text-center ActionListener
                p.px-1.text-small.mb-0.text-center Define el método actionPerformed() para manejar eventos de acción, como clics de botones o selecciones de elementos de menú
            .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-52.svg', style='width: 80px')
                p.text-bold.mb-4.text-center MouseListener
                p.px-1.text-small.mb-0.text-center Define métodos para manejar eventos de mouse, como mouseClicked(), mousePressed(), mouseReleased(), mouseEntered() y mouseExited()
            .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-53.svg', style='width: 80px')
                p.text-bold.mb-4.text-center KeyListener
                p.px-1.text-small.mb-0.text-center Define métodos para manejar eventos de teclado, como keyPressed(), keyReleased() y keyTyped()
            .col-10.col-md-8.col-lg-4.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-54.svg', style='width: 80px')
                p.text-bold.mb-4.text-center ItemListener
                p.px-1.text-small.mb-0.text-center Define el método itemStateChanged() para manejar eventos de cambio de estado de elementos, como selecciones en un JComboBox o JCheckBox

      .row.mb-4
        .col-12.col-xl-8
          p.mb-4 Para implementar una interfaz de escucha, se puede crear una clase que implemente la interfaz y proporcione la implementación de los métodos requeridos. Luego, se crea una instancia de esa clase y se registra como <i>listener</i> en el componente correspondiente utilizando el método addXXXListener().
          .bg-morado.p-4(data-aos='fade-up').mb-4
            span De acuerdo con Ruiz Rodríguez (2009), la implementación de interfaces de escucha permite definir el comportamiento específico de la aplicación en respuesta a los eventos generados por el usuario.
          span En el desarrollo de <i>software</i>, es común implementar las interfaces de escucha como clases anónimas o expresiones lambda, lo que permite un código más conciso y legible. 
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 11.</b> Ejemplo de implementación de la interfaz ActionListener

      .row.mb-4.bg-azul.py-4
        .col-10.col-md-8.col-lg-6.mx-auto
          img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')

      p.mb-4 <b>Figura 12.</b> Ejemplo de implementación de la interfaz MouseListener

      .row.mb-4.bg-azul.py-4
        .col-11.col-md-9.col-lg-8.mx-auto
          img(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')

      .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-58.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto.text-white Pruebas y depuración de excepciones
            p.mb-5(data-aos="fade-up").text-white Se invita a leer el documento Pruebas y depuración de excepciones, donde se aborda el tratamiento de errores en el desarrollo de software, especialmente en lenguaje Java.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_pruebas depuracion excepciones.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Pruebas y depuración de excepciones

      p.mb-4 En el desarrollo de esta unidad, se comenzó hablando de los diferentes tipos de excepciones en Java. Se aprendió sobre la diferencia entre excepciones verificadas y no verificadas y cómo se organizan en una jerarquía de clases. También se abordó cómo declarar, lanzar y propagar excepciones usando palabras clave como <i>try, catch, finally, throw y throws.</i>

      .row.mb-4
        .col-12.col-xl-8
          .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
            img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-59.svg', alt='Texto descriptivo de la imagen')
            .my-auto.p-4.p-xl-0
              p.pe-xl-3.mb-0 Luego, se revisó en el mundo del manejo de eventos en interfaces gráficas de usuario. Se descubrió que el modelo de eventos en GUI se basa en el patrón Observer, donde los componentes generan eventos y los observadores reaccionan a ellos. Se aprendió sobre las diferentes clases de eventos y <i>listeners</i>, cómo asociar eventos a componentes y cómo implementar interfaces de escucha para manejar eventos específicos.
          p.mb-4 Después de eso, se habló sobre pruebas y depuración de excepciones. Se manejaron algunas técnicas básicas de depuración, como el uso de puntos de ruptura y trazas, y cómo usar las herramientas de depuración en nuestro IDE. También se discutió algunos errores comunes al manejar excepciones, como no manejar excepciones en absoluto, capturar excepciones demasiado generales o ignorar excepciones por completo. 
          span Luego, se exploró el registro de errores o <i>logging</i> como una forma de registrar eventos importantes y errores en las aplicaciones. Se estudió cómo usar la clase <i>Logger</i> en Java para registrar mensajes en diferentes niveles de gravedad y cómo esto puede ser invaluable para entender y depurar las aplicaciones, especialmente en entornos de producción.
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')

      .row.mb-5
        .col-4.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8
          p.mb-4 Por último, se abordó la integración de pruebas unitarias para validar el manejo de excepciones. Se aprendió cómo usar JUnit para escribir pruebas que verifiquen que los métodos usados lanzan las excepciones esperadas cuando se les dan entradas inválidas y que manejan las excepciones correctamente.
          .bg-morado.p-4.mb-4(data-aos='fade-up')
            span A lo largo de todo el documento, se ha enfatizado la importancia de un buen manejo de excepciones para crear aplicaciones robustas, confiables y fáciles de mantener. Se ha visto que el manejo de excepciones no se trata solo de evitar que nuestras aplicaciones se bloqueen, sino también de proporcionar información útil cuando las cosas van mal y de asegurar de que el código pueda manejar situaciones inesperadas.
          span Pero recuerde, el manejo de excepciones no es algo que se pueda dominar solo leyendo sobre ello. Requiere práctica, experimentación y bastante prueba y error. Cuanto más se escriba código y se depure, mejor dominio se tendrá en el manejo de excepciones. Así que siga practicando, siga aprendiendo y no tenga miedo de cometer errores. Después de todo, es a través de los errores que a menudo aprendemos las lecciones más valiosas. 

      .bg-full-width.border-top.actividad(style='background-color: #ebf1f5; border-top: 5px solid #f5c145 !important')
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario='cuestionario'/>

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/39461?page=1") López Goytia, J. L. (2015). Programación orientada a objetos C++ y Java: un acercamiento interdisciplinario: ( ed.). Grupo Editorial Patria
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/106461?page=1") Moreno Pérez, J. C. (2015). Programación orientada a objetos: ( ed.). RA-MA Editorial
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/70431?page=1") Oviedo Regino, E. M. (2015). Lógica de programación orientada a objetos: ( ed.). Ecoe Ediciones
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/34869?page=9") Ruiz Rodríguez, R. (2009). Fundamentos de la programación orientada a objetos: una aplicación a las estructuras de datos en Java: ( ed.). El Cid Editor
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/63076?page=1") Vélez Serrano, J. (2011). Diseñar y programar, todo es empezar: una introducción a la Programación Orientada a Objetos usando UML y Java: ( ed.). Dykinson
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/ArVVh9_h26U") [Vídeo] Lopez, M. (2020, 20 de noviembre). GUI + BD (16 : Validaciones De Campos "Importante De Ver!!")
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/YIo-J1O42ec") [Vídeo] Hernández, J. (2019, 10 de abril). Ejercicio para agregar un Listener a un JButton
            
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

      p
  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    cuestionario: {
      tema: 'Unidad 3: Manejo de excepciones y eventos en GUI',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es una excepción en programación?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un comentario en el código', esCorrecta: false },
            {
              id: 'b',
              texto: 'Un error que ocurre durante la ejecución',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Una variable global', esCorrecta: false },
            {
              id: 'd',
              texto: 'Un archivo de configuración',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál de estas es una excepción común en Python?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FileBrokenError', esCorrecta: false },
            { id: 'b', texto: 'ZeroDivisionError', esCorrecta: true },
            { id: 'c', texto: 'RunTimeFix', esCorrecta: false },
            { id: 'd', texto: 'ClassError', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué es un evento en una GUI?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un dato almacenado', esCorrecta: false },
            {
              id: 'b',
              texto: 'Una acción del usuario, como hacer clic',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Un archivo temporal', esCorrecta: false },
            { id: 'd', texto: 'Una excepción del sistema', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un ejemplo de evento en una interfaz gráfica?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Presionar un botón', esCorrecta: true },
            { id: 'b', texto: 'Declarar una función', esCorrecta: false },
            { id: 'c', texto: 'Compilar el código', esCorrecta: false },
            { id: 'd', texto: 'Crear una variable', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué es depurar en programación?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar el diseño gráfico',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Localizar y corregir errores en el código',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Traducir un lenguaje', esCorrecta: false },
            { id: 'd', texto: 'Crear documentación', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
