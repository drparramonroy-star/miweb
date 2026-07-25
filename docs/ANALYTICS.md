# Seguimiento de conversiones (Google Tag Manager)

El sitio mide conversiones vía **Google Tag Manager (GTM)**. El contenedor
`GTM-TMPL49T3` ya está configurado por defecto en el código, así que el tracking
queda activo automáticamente al desplegar (no requiere configuración extra).

## Cambiar o sobrescribir el contenedor (opcional)

El ID por defecto se puede sobrescribir sin tocar código con la variable de entorno
en **Vercel → Settings → Environment Variables**:

```
NEXT_PUBLIC_GTM_ID = GTM-XXXXXXX
```

Tras cambiarla, redesplegar.

## Eventos disponibles en el dataLayer

El código ya empuja estos eventos; desde GTM se convierten en conversiones de Google Ads / GA4
sin volver a tocar el código:

| Evento (`event`)   | Cuándo se dispara                                   | Parámetros                       |
| ------------------ | --------------------------------------------------- | -------------------------------- |
| `whatsapp_click`   | Clic en cualquier botón/enlace de WhatsApp          | `source`                         |
| `bmi_calculated`   | El usuario calcula su IMC en la calculadora          | `imc`, `category`, `candidate`   |

Valores de `source` en `whatsapp_click`:

- `whatsapp_button` — botones de WhatsApp en el contenido (valor por defecto).
- `floating` — botón flotante de WhatsApp (esquina inferior derecha).
- `bmi_result` — botón "Enviar resultados al Especialista" tras calcular el IMC.

## Configurar la conversión de Google Ads en GTM (resumen)

1. En GTM crear una **Variable de capa de datos** para `source` (si se quiere segmentar).
2. Crear un **Activador** de tipo *Evento personalizado* con nombre de evento `whatsapp_click`.
3. Crear una **Etiqueta** de *Conversión de Google Ads* con el ID de conversión + etiqueta que
   entrega Google Ads, y asignarle ese activador.
4. Publicar el contenedor.

> Nota: al ser un sitio de salud conviene añadir un banner de consentimiento de cookies
> antes de activar el tracking en producción.
