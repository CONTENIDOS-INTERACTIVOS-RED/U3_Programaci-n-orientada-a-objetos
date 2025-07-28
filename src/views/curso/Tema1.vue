<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Manejo de excepciones y eventos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-9
        span En la programación orientada a objetos, el dominio de excepciones y eventos es fundamental para crear aplicaciones robustas y fáciles de mantener. Las excepciones permiten controlar situaciones inesperadas o errores durante la ejecución del programa, evitando así que la aplicación se detenga abruptamente, brindando información valiosa para el diagnóstico y solución de problemas.
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen') 

    .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.flex-column
          h2.mb-4.pb-2.me-auto.text-white Ejemplo 
          p.mb-4(data-aos="fade-up").text-white Para conocer un ejemplo práctico de excepciones le invitamos a ver el siguiente vídeo.
          p.mb-4(data-aos="fade-up").text-white Manejo de Excepciones en POO explicado en 2 minutos. 
          p.mb-5(data-aos="fade-up").text-white Además, a través del siguiente enlace podrá interactuar con el código, crear sus propias excepciones o modificar sus atributos para obtener nuevos resultados. 
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" href="https://www.programiz.com/online-compiler/1gfDwEarOuYWz " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/youtube-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Manejo de Excepciones en POO

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Por otro lado, los eventos son una parte esencial de las interfaces gráficas de usuario (GUI) que permiten a las aplicaciones responder a las acciones del usuario, como clics de ratón o pulsaciones de teclas. El manejo de eventos se basa en el diseño orientado a eventos (Event-Driven Programming), donde el flujo del programa está determinado por los eventos generados por el usuario o el sistema.
        .d-flex.bg-verde.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-5.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 En esta unidad, se explorarán en detalle los conceptos relacionados con el manejo de excepciones y eventos en el contexto de la programación orientada a objetos. Se abordarán los diferentes tipos de excepciones, la jerarquía de clases de excepción, la declaración y propagación de excepciones, así como la creación de excepciones personalizadas y buenas prácticas para el manejo de errores.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Además, se profundizará en el manejo de eventos en interfaces gráficas, incluyendo las clases de eventos y <i>listeners</i>, la asociación de eventos a componentes, la implementación de interfaces de escucha y el diseño orientado a eventos.
        .bg-morado.p-4(data-aos='fade-up').mb-4
          span Finalmente, se abordarán las pruebas y depuración de excepciones, con énfasis en técnicas básicas de depuración, el uso de herramientas del entorno de desarrollo, la identificación y corrección de errores comunes, el registro de errores y la integración de pruebas unitarias para validar el manejo de errores.
        span Al finalizar esta unidad, se tendrá un conocimiento sólido sobre el manejo de excepciones y eventos en la programación orientada a objetos, permitiendo desarrollar aplicaciones más robustas, fáciles de mantener y con una mejor experiencia de usuario.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Tipos de excepciones

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 En la programación orientada a objetos, las excepciones son un mecanismo para manejar situaciones excepcionales o errores que pueden ocurrir durante la ejecución de un programa. Las excepciones permiten separar el código de manejo de errores del flujo normal del programa, lo que facilita la legibilidad y el mantenimiento del código.
        .bg-azul.p-4(data-aos='fade-up')
          span En este apartado, se explorarán los diferentes tipos de excepciones, incluyendo las excepciones verificadas y no verificadas, la jerarquía de clases de excepción, la declaración y propagación de excepciones, la creación de excepciones personalizadas y las buenas prácticas para el manejo de errores.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    h2 Excepciones verificadas y no verificadas

    .row.mb-4 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 Las excepciones se clasifican en dos categorías principales: excepciones verificadas (<i>checked exceptions</i>) y excepciones no verificadas (<i>unchecked exceptions</i>).
        .bg-morado.p-4(data-aos='fade-up')
          span Las excepciones verificadas son aquellas que deben ser declaradas en la firma del método o manejadas dentro del mismo. El compilador verifica que estas excepciones sean tratadas adecuadamente, ya sea mediante un bloque try-catch o declarándolas en la cláusula throws. Ejemplos de excepciones verificadas en Java son IOException, SQLException y ClassNotFoundException.

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Por otro lado, las excepciones no verificadas no requieren ser declaradas ni manejadas explícitamente. Estas excepciones heredan de la clase RuntimeException o Error y son generalmente causadas por errores de programación, como acceso a índices fuera de los límites de un arreglo (ArrayIndexOutOfBoundsException) o división por cero (ArithmeticException).
        .bg-amarillo.p-4(data-aos='fade-up').mb-4 
          span Según Ceballos Sierra (2018), las excepciones verificadas obligan a que el programador tome una decisión sobre cómo manejar la excepción, mientras que las excepciones no verificadas no requieren una acción explícita del programador.
        span En el contexto de la ingeniería de software, es importante distinguir entre excepciones verificadas y no verificadas al diseñar y desarrollar aplicaciones. Las excepciones verificadas se utilizan para situaciones excepcionales que pueden ocurrir y que deben ser manejadas explícitamente, como errores de entrada/salida o de base de datos. Por otro lado, las excepciones no verificadas se utilizan para errores de programación y situaciones inesperadas que no siempre pueden ser anticipadas.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
        
    p.mb-4 <b>Figura 1.</b> Ejemplo de uso de excepciones.

    .row.mb-4.bg-azul.py-4
      .col-10.col-md-8.col-lg-6.mx-auto
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
    
    h2 Jerarquía de clases de excepción

    .row.mb-4
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        p.mb-4 En la programación orientada a objetos, las excepciones se organizan en una jerarquía de clases. En Java, la clase base para todas las excepciones y errores es <i>Throwable</i>. A partir de <i>Throwable</i>, se derivan dos subclases principales: Exception y Error.
        .bg-morado.p-4(data-aos='fade-up')
          span La clase Exception representa las excepciones que pueden ser manejadas por el programa. Dentro de Exception, se encuentra la subclase RuntimeException, que engloba las excepciones no verificadas. Todas las demás excepciones que heredan directamente de Exception son consideradas excepciones verificadas.

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Por otro lado, la clase Error representa errores graves que generalmente no pueden ser manejados por el programa, como errores de la máquina virtual de Java (OutOfMemoryError) o errores de sintaxis en el código fuente (VerifyError).
        .bg-verde.p-4(data-aos='fade-up').mb-4
          span De acuerdo con Moreno Pérez (2015), la jerarquía de clases de excepción permite al programador crear excepciones personalizadas que se ajusten a las necesidades específicas de la aplicación.
        span En el desarrollo de software, es común crear excepciones personalizadas que hereden de Exception o RuntimeException para representar situaciones excepcionales específicas del dominio de la aplicación. Esto permite un manejo de errores más granular y facilita la comprensión y el mantenimiento del código. 
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 2.</b> Ejemplo de jerarquía de clases de excepción.

    .row.mb-4.bg-azul.py-4
      .col-10.col-md-8.col-lg-5.mx-auto
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      
    .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto.text-white Manejo de excepciones
          p.mb-5(data-aos="fade-up").text-white Para ampliar el concepto sobre el manejo de excepciones, le invitamos a ver el siguiente vídeo. 
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" href="https://youtu.be/Wnn6RZ4opfA " target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Manejo de Excepciones.

    h2 Declaración y propagación de excepciones
    p.mb-4 En la programación orientada a objetos, las excepciones se declaran y propagan utilizando las palabras clave: <i>try, catch, finally, throw y throws</i>.

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Try
              p Se utiliza para encapsular el código que puede lanzar una excepción. Si se produce una excepción dentro del bloque <i>try</i>, el flujo del programa se transfiere al bloque catch correspondiente.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Catch
              p Se utiliza para manejar las excepciones lanzadas en el bloque <i>try</i>. Se especifica el tipo de excepción que se desea capturar y se proporciona el código para manejar esa excepción.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Finally
              p Se utiliza para especificar un bloque de código que se ejecutará siempre, independientemente de si se produjo una excepción o no. Es útil para liberar recursos, como cerrar archivos o conexiones a bases de datos.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-18.png', alt='Texto que describa la imagen')

    p.mb-4 A continuación, se presenta una tabla con los términos más relevantes y su función en el manejo de excepciones.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        .row.mb-4
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Throw
                p.text-small.px-4.text-center.pb-2 Se utiliza para lanzar una excepción explícitamente desde el código. Esto permite al programador señalar situaciones excepcionales y transferir el control a un bloque catch adecuado.
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
              div.mb-4.px-4
                p.text-bold.text-center Throws
                p.text-small.px-4.text-center.pb-2 Se utiliza en la firma de un método para declarar las excepciones verificadas que el método puede lanzar. Esto obliga a que quien llame al método maneje esas excepciones o las declare a su vez.

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 López Goytia (2015), considera que el uso adecuado de <i>try, catch, finally, throw y throws</i> permite un manejo estructurado y eficiente de las excepciones en el código.
        .bg-amarillo.p-4(data-aos='fade-up')
          span En el desarrollo de software, es importante utilizar correctamente estos mecanismos para manejar las excepciones de manera efectiva. La declaración o propagación adecuada de las excepciones ayuda a localizar y solucionar errores, además de mejorar la legibilidad y el mantenimiento del código.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 3.</b> Ejemplo de declaración y propagación de excepciones
    
    .row.mb-4.bg-azul.py-4
      .col-11.col-md-9.col-lg-7.mx-auto
        img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')

    h2 Creación de excepciones personalizadas

    .row.mb-4
      .col-12.col-xl-7
        p.mb-4 A continuación, se presenta un recurso educativo que aborda la creación de excepciones personalizadas en programación orientada a objetos, explicando su propósito, implementación y beneficios para un manejo de errores más claro y específico: 
        TarjetaAudio.color-secundario.bg-white.mb-3(
          texto='Programación orientada a objetos'
          tiempo
          :audio="require('../../assets/componentes/audios/Programación_orientada_a_objetos.mp3')"
          @audio-hover='mostrarIndicadorTarjetaAudio = false'
        )
      .col-5.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 4.</b> Ejemplo de creación de una excepción personalizada

    .row.mb-4.bg-azul.py-4
      .col-11.col-md-9.col-lg-8.mx-auto
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    .row.bg-azul-oscuro.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
        .col-12.col-xl-8.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto.text-white Manejo de excepciones en Java (try-catch). 
          p.mb-5(data-aos="fade-up").text-white Para ampliar el concepto sobre el manejo de excepciones en Java, le invitamos a ver el siguiente vídeo. 
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" href="https://youtu.be/7XeQBBcaFZQ" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Video.</strong> Manejo de excepciones en Java (try-catch).

    h2 Buenas prácticas para el manejo de errores
    p.mb-4 El manejo técnico de errores es fundamental para crear aplicaciones robustas y fáciles de mantener. A continuación, se presentan algunas buenas prácticas para el manejo de errores en la programación orientada a objetos:

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5

        .row
          .col-4.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
          .col-12.col-xl-8
            SlyderF(columnas='col-12 col-lg-6 py-4 px-3')
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Utilizar excepciones para situaciones excepcionales
                p.px-1.text-small.mb-0.text-center Las excepciones deben utilizarse para manejar situaciones excepcionales o errores, no para controlar el flujo normal del programa
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-28.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Ser específico con las excepciones
                p.px-1.text-small.mb-0.text-center Utilizar excepciones específicas que representen claramente el tipo de error o situación excepcional que se está manejando
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-29.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Proporcionar mensajes de error informativos
                p.px-1.text-small.mb-0.text-center Los mensajes de error deben ser claros, concisos y proporcionar información relevante para el diagnóstico y solución del problema
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-30.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Evitar el uso excesivo de bloques try-catch
                p.px-1.text-small.mb-0.text-center Solo cuando sea necesario y evitar anidar múltiples bloques try-catch, ya que puede dificultar la legibilidad del código
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-31.svg', style='width: 80px')
                p.text-bold.mb-4.text-center Liberar recursos en el bloque finally
                p.px-1.text-small.mb-0.text-center Utilizar el bloque finally para liberar recursos, como cerrar archivos o conexiones a bases de datos, independientemente de si se produjo una excepción o no.
              .custom-image-card.d-flex.flex-column.p-4.py-md-5
                img.mx-auto.mb-4(src='@/assets/curso/unidad/img-32.svg', style='width: 80px')
                p.text-bold.mb-4.text-center No ignorar las excepciones
                p.px-1.text-small.mb-0.text-center Evitar bloques catch vacíos o que simplemente registren el error sin realizar ninguna acción. Siempre se debe manejar adecuadamente las excepciones o propagarlas si no se pueden manejar en el nivel actual
    
    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Según Ruiz Rodríguez (2009), el manejo adecuado de errores es una parte esencial del desarrollo de <i>software</i> que contribuye a la creación de aplicaciones más robustas y fáciles de mantener.
        .bg-amarillo.p-4(data-aos='fade-up')
          span En el contexto de la ingeniería de <i>software</i>, seguir buenas prácticas para el manejo de errores ayuda a mejorar la calidad del software, facilita el diagnóstico y solución de problemas, y reduce el tiempo y los costos de mantenimiento.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    p.mb-4 <b>Figura 5.</b> Ejemplo de buenas prácticas para el manejo de errores

    .row.mb-5.bg-azul.py-4
      .col-11.col-md-9.col-lg-8.mx-auto
        img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
    
    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/106519?page=1") Ceballos Sierra, F. J. (2018). Programación orientada a objetos con C++: (5 ed.). RA-MA Editorial
            
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
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/Wnn6RZ4opfA") [Vídeo] Cruz, R. (2020, 28 de octubre). Manejo de Excepciones
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/7XeQBBcaFZQ") [Vídeo] Castillo, L. (2020, 16 de agosto). Manejo de excepciones en Java (try-catch)
          
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')
    
    p


</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
