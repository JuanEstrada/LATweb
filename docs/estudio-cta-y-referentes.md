# CTA y referentes: una cotización clara antes que un color «ganador»

**Recomendación ejecutiva:** usar un hero claro, texto carbón y una acción principal violeta con texto blanco. La decisión favorece legibilidad y coherencia con el logotipo disponible; no demuestra un aumento de ventas. No existe un color universal que venda más. La paleta es provisional, derivada visualmente del logotipo, no un manual de marca certificado.

## Decisión aplicada y ruta de revisión

La vista [Diseño unificado preliminar](../design/public-real-content/03-acompanamiento.html) conserva el encabezado y la navegación editoriales seleccionados, el hero de asesoría («Cuéntanos el viaje que tienes en mente») y las secciones con la oferta primero. El CTA conserva «Solicitar cotización» y su destino interno `#contacto`.

- Hero en neutro claro `#f7f7f7`, texto carbón `#343333`, texto secundario `#5f5960` y violeta `#873466` para acción y eyebrow.
- Botón principal: violeta `#873466` / blanco; hover `#6d2853` / blanco. Las cotizaciones de las fichas usan enlaces violetas subrayados, no botones amarillos. El amarillo queda como acento pequeño en el bloque oscuro de contacto, no como CTA prominente.
- Se mantienen el logotipo multicolor, las fotografías, sus advertencias, el orden y el contenido, los enlaces, los detalles desplegables y el pie. Las propuestas 01 y 02 no se actualizan en esta unidad.

Es una **maqueta estática local**, no una aplicación de producción ni una reserva operativa. No abre WhatsApp ni envía datos. Siguen pendientes aprobación final, imágenes y permisos, tarifas, traducción y revisión jurídica. La etiqueta del canvas identifica 03 como preliminar, no como aprobación definitiva.

## Qué es evidencia y qué es hipótesis

| Evidencia disponible | Lo que no permite concluir |
| --- | --- |
| WCAG define contrastes y reglas de interacción; los ratios siguientes se calcularon localmente con luminancia relativa sRGB. | Cumplir contraste no prueba conversión ni certifica por sí solo accesibilidad completa. |
| NN/g recomienda una acción primaria sólida y prominente, etiqueta legible y estados distinguibles. | No se atribuye a esa recomendación ningún porcentaje de ventas. |
| Microsoft Research explica beneficios de experimentos controlados a escala. | No establece un color ganador para esta agencia. |
| Se observaron fuentes oficiales y, en algunos casos, HTML/CSS de referentes. | No equivale a una auditoría visual, móvil, de checkout o de ROI. |
| La propuesta local distingue acción y contenido con una superficie clara. | La mejora de consultas cualificadas es una hipótesis, no un resultado medido. |

Los clics no son consultas; las consultas no son reservas. Una solicitud de cotización es un paso de asesoría, no una confirmación de compra.

## Método y alcance del estudio

**Fecha de acceso de las fuentes: 2026-11-09.** Es una fecha de consulta, no la fecha de última actualización de cada sitio. Este documento registra investigación ya realizada; no incorpora una nueva búsqueda.

Se eligieron cinco referencias internacionales representativas, **no un top de ventas ni un ranking verificado**. Se distinguió página de comprador, documentación institucional y recursos para socios. Booking presentó una portada dependiente de JavaScript y texto escaso en una página de París; Expedia respondió 429; GetYourGuide y Viator respondieron 403 en los accesos intentados. No se eludieron esos bloqueos. Intrepid ofreció el HTML y CSS observables más completos.

No hubo auditoría renderizada, de navegación móvil, de checkout, de tasas de conversión ni de resultados comerciales. El CSS de prensa o de socios no acredita el botón de compra del sitio público. Los tokens genéricos tampoco acreditan el color de un CTA concreto.

## Cinco referentes: adoptar sin copiar conclusiones

| Referente y fuente observada | Hallazgo verificable y límite | Adoptar / evitar |
| --- | --- | --- |
| **Booking** · «How we work» oficial | Explica filtros y clasificación, comisiones, programas preferentes y anuncios, reseñas e inclusiones/exclusiones del precio. No se verificó la paleta actual ni el CTA de comprador. | Adoptar precios transparentes y reseñas autorizadas; evitar rankings o sellos que la agencia no pueda sustentar. |
| **Expedia** · descripción oficial de marca | Presenta planificación de vuelos, alojamientos, autos y cruceros. No se confirmó paleta ni CTA; la limitación 429 impide inferir la interfaz actual. | Adoptar una propuesta clara; no copiar un motor multivertical que no corresponde a una agencia terrestre pequeña. |
| **GetYourGuide** · CSS del centro oficial de prensa | `guidingred #fa4f2d`, `midnight #020226` y `buttonblue #306fe3` con blanco. Es evidencia de la paleta de prensa, **no del botón para reservar ni del checkout**. | Adoptar experiencias y destinos concretos y separar marca de acción; no afirmar que el naranja convierte más. |
| **Viator** · recursos para socios | Botones `#186b6d`, hover `#0e5152`, con blanco, en recursos PARTNER; no acredita CTA de comprador ni paleta completa certificada. Una guía de filtros de 2020 describe fecha, presupuesto, duración, horario y valoración; no demuestra la UI actual. | Adoptar atributos consistentes de recorrido; evitar muchos filtros, disponibilidad ficticia y extrapolar una guía antigua a la pantalla actual. |
| **Intrepid** · homepage, CSS y contenido Machu Picchu | Logo SVG `#FF2828`; el Search real de portada usa clase especial con `#eb0000` / blanco y hover `#c80000`. El token primario genérico negro no es ese CTA. El contenido compara rutas, esfuerzo, permisos, inclusiones, reseñas y personalización. | Adoptar elección guiada y honestidad sobre condiciones; no copiar certificaciones ni un catálogo exhaustivo. |

## Paleta y contraste: texto no es prominencia

Ratios locales WCAG sRGB, redondeados a dos decimales. En cada pareja se indica el contraste entre los dos colores, no una predicción comercial.

| Pareja | Ratio | Lectura para esta propuesta |
| --- | ---: | --- |
| Violeta `#873466` / blanco | 7.74:1 | Texto blanco del CTA normal legible. |
| Hover `#6d2853` / blanco | 10.10:1 | Mantiene legibilidad al pasar el puntero. |
| Violeta / carbón `#343333` | 1.63:1 | No usar como texto o límite necesario sobre carbón. |
| Hover violeta / carbón | 1.25:1 | Oscurecerlo no resuelve esa separación. |
| Cian `#006578` / blanco | 6.70:1 | Alternativa a probar sobre claro, no ganadora demostrada. |
| Cian / carbón | 1.88:1 | No trasladar sin más a superficie oscura. |
| Amarillo `#f2d94e` / carbón | 8.88:1 | Legible en acentos del bloque oscuro. |
| Amarillo claro `#fff0a3` / carbón | 10.94:1 | Pareja estudiada, no hover del CTA aplicado. |
| Amarillo / blanco | 1.42:1 | Poca separación frente a blanco. |
| Amarillo claro / blanco | 1.15:1 | Aún menos separación frente a blanco. |

Un buen ratio entre texto y relleno **no equivale a saliencia frente al entorno**. Por eso se aplica violeta sobre fondo claro, no violeta sobre un hero oscuro. La superficie efectiva del hero es `#f7f7f7`, no blanco puro. Muestras calculadas sobre esa superficie: carbón **11.76:1**, secundario `#5f5960` **6.36:1**, enlace/relleno/foco violeta **7.22:1**, hover violeta **9.43:1** y borde `#827a82` **3.88:1**. El violeta sobre el neutro de apoyo `#f1edf2` da **6.68:1**. El anillo violeta frente al apoyo blanco da **7.74:1**; el foco amarillo del contacto frente al carbón da **8.88:1**. Son muestras calculadas, no una certificación integral.

## Estados, tamaño y contexto accesibles

- WCAG pide al menos **4.5:1 para texto normal** y **3:1 para texto grande**, según su definición. La información visual necesaria para reconocer controles y estados requiere **3:1 respecto al color adyacente**, con excepciones: no obliga a dibujar un borde en cada botón cuando otras señales bastan. El color no debe ser la única señal de estado.
- Acción primaria sólida y etiquetada; hover más oscuro, enlaces subrayados y foco visible. En el área clara, el foco violeta con separación y apoyo blanco evita depender del cambio de relleno; en contacto oscuro se conserva el foco amarillo. El foco de teclado y el menú móvil deben permanecer legibles. Se mantiene la preferencia de movimiento reducido.
- Se proponen botones con altura mínima **48 CSS px** y enlaces de cotización con mínimo **44 CSS px**, dejando crecer etiquetas. **44–48 px es una recomendación cómoda**, no una exigencia universal de WCAG. WCAG 2.2 AA establece 24 CSS px para tamaño mínimo de objetivo, con excepciones de espaciado y otros casos; dimensiones aisladas no prueban conformidad.
- No se crean estados ficticios de formulario. Carga, error y éxito solo se diseñarán si existe un formulario real. Si en el futuro un enlace abre WhatsApp, debe decir lo que hace: abrir una conversación no es enviar correctamente una solicitud ni reservar.
- No se añaden urgencias, reseñas, promesas o ubicaciones exactas de fotos sin respaldo. Se conservan las advertencias de imágenes referenciales y permisos pendientes.

La revisión aquí es de código y contraste calculado. **La composición renderizada en escritorio y móvil, el zoom, el tacto y el recorrido real con teclado siguen sin verificarse en navegador.** No se afirma una auditoría de accesibilidad completa.

## Lecciones para la agencia

**Adoptar:** una acción principal inequívoca; atributos comparables por recorrido; inclusiones y exclusiones transparentes; movilidad y esfuerzo explícitos; asesoría humana y expectativas de respuesta honestas. Mantener visibles los pendientes evita confundir una propuesta con disponibilidad confirmada.

**Evitar:** copiar un color por prestigio de la marca, confundir recursos de prensa con checkout, simular un catálogo enorme, publicar reseñas o sellos no autorizados y llamar «reservar» a una consulta. La oferta y la capacidad de respuesta importan tanto como la apariencia del botón.

## Experimento opcional, no condición para decidir

Si hay tráfico y capacidad operativa suficientes, comparar violeta frente a cian sobre **el mismo fondo claro**, manteniendo texto, posición, diseño y origen del tráfico constantes. Definir primero línea base, MDE (mínimo efecto detectable), plan estadístico y criterio de cierre; no se inventan muestra, duración ni ganador.

- Métrica primaria: **consultas cualificadas**, con definición previa y consistente.
- Resultado posterior: reservas confirmadas, sin equipararlas a clics ni atribuirlas automáticamente al color.
- Salvaguardas: clics accidentales, contactos de baja calidad y capacidad/tiempo de respuesta de la agencia.

Elegir por estética, coherencia y accesibilidad sin ejecutar un A/B también es válido. Esta propuesta no presenta resultados experimentales.

## Fuentes y límites de reproducción

Todas consultadas en la fecha indicada. Los bloqueos y el alcance institucional se documentan arriba; las URLs no implican disponibilidad futura ni una fecha reciente de actualización.

### Accesibilidad y método

- W3C, contraste de texto: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- W3C, contraste no textual: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- W3C, uso del color: https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html
- W3C, tamaño mínimo de objetivo: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html
- NN/g, estados de botones: https://www.nngroup.com/articles/button-states-communicate-interaction/
- Microsoft Research, experimentación controlada: https://www.microsoft.com/en-us/research/publication/the-benefits-of-controlled-experimentation-at-scale/

### Referentes oficiales

- Booking, funcionamiento: https://www.booking.com/content/how_we_work.en-gb.html
- Expedia, marca: https://www.expediagroup.com/brands/expedia/ — redirigió a «Travel with us».
- GetYourGuide, centro de descargas de prensa: https://www.getyourguide.press/download-center
- Viator, guía de búsqueda para socios: https://partnerresources.viator.com/resources/searching-for-products/
- Viator, recursos para socios: https://partnerresources.viator.com/resources/
- Intrepid, Machu Picchu: https://www.intrepidtravel.com/en/peru/machu-picchu
- Intrepid, portada: https://www.intrepidtravel.com/ — se observaron los recursos vinculados `/_nebula/entry.C4dAaORN.css` y `/files/images/logos/intrepid-logo-small.svg`. Esos nombres corresponden a la observación, no garantizan permanencia ni describen todos los estados del sitio.
