define({
    "customVideoScale": "Personalizado",
    "steamVRRestartSuccess": "SteamVR reiniciado con éxito",
    "_root_video_tab.name": "Video",
    "_root_video_tab.description": "Ajustes de video",
    "_root_audio_tab.name": "Audio",
    "_root_audio_tab.description": "Ajustes de audio",
    "_root_headset_tab.name": "Visor",
    "_root_connection_tab.name": "Conexión",
    "_root_video_adapterIndex.name": "Índice de adaptador",
    "_root_video_adapterIndex.description": "El índice que identifica la GPU",
    "_root_video_refreshRate.name": "FPS",
    "_root_video_refreshRate.description": "FPS del visor",
    "_root_video_encodeBitrateMbs.name": "Bitrate para el video",
    "_root_video_encodeBitrateMbs.description": `Transmisión de video a velocidad de bits. Se recomiendan 30Mbps.
Una mayor tasa de bits resulta en una mejor calidad de imagen pero a costa de una mayor latencia y tráfico de red.`,
    "_root_video_force60hz.name": "Forzar 60Hz",
    "_root_video_force60hz.description": "Actualización de la imagen forzada a 60 FPS",
    "_root_video_resolutionDropdown.name": "Resolución de video",
    "_root_video_resolutionDropdown.description": `El 100% corresponde a la resolución nativa de 2880x1600 de la Oculus Quest. 
El ajuste de la resolución puede mejorar ligeramente la calidad de la imagen, pero no se recomienda. 
Una resolución inferior al 100% puede reducir la latencia y mejorar la calidad de la transmisión.`,
    "_root_video_renderResolution-choice-.name": "Resolución de video",
    "_root_video_renderResolution_scale-choice-.name": "Usar el factor de escala",
    "_root_video_renderResolution_scale-choice-.description": "Factor de escala de la resolución de video",
    "_root_video_renderResolution_scale.name": "Escala",
    "_root_video_renderResolution_scale.description": "Factor de escala de video",
    "_root_video_renderResolution_absolute-choice-.name": "Usar valor absoluto",
    "_root_video_renderResolution_absolute-choice-.description": "Usar valor absoluto para la resolución de video",
    "_root_video_renderResolution_absolute_absolute.name": "Valor absoluto de la resolución",
    "_root_video_renderResolution_absolute_absolute.description": "Valor absoluto de la resolución.",
    "_root_video_renderResolution_absolute_width.name": "Ancho del video",
    "_root_video_renderResolution_absolute_width.description": "El ancho en píxeles del video codificado.",
    "_root_video_renderResolution_absolute_height.name": "Altura del video",
    "_root_video_renderResolution_absolute_height.description": "La altura en píxeles del vídeo codificado.",
    "_root_video_recommendedTargetResolution-choice-.name": "Resolución de cuadro preferida",
    "_root_video_recommendedTargetResolution-choice-.description": "Resolución requerida por SteamVR para la representación",
    "_root_video_recommendedTargetResolution_scale-choice-.name": "Usar factor de escala",
    "_root_video_recommendedTargetResolution_scale.name": "Escala",
    "_root_video_recommendedTargetResolution_scale.description": "Escala",
    "_root_video_recommendedTargetResolution_absolute-choice-.name": "Usar valor absoluto",
    "_root_video_recommendedTargetResolution_absolute_absolute.name": "Usar el valor absoluto para la resolución de video",
    "_root_video_recommendedTargetResolution_absolute_width.name": "Ancho del fotograma",
    "_root_video_recommendedTargetResolution_absolute_width.description": "El ancho de fotograma preferido en píxeles",
    "_root_video_recommendedTargetResolution_absolute_height.name": "Altura del fotograma",
    "_root_video_recommendedTargetResolution_absolute_height.description": "La altura de fotograma preferida en píxeles",
    "_root_video_eyeFov.name": "FOV",
    "_root_video_eyeFov.description": "Tamaño del campo de visión de cada ojo",
    "_root_video_eyeFov_0_eyeFov_0.name": "Ojo izquierdo",
    "_root_video_eyeFov_0_eyeFov_0.description": "Configuración para el ojo izquierdo",
    "_root_video_eyeFov_0_left.name": "Lado izquierdo",
    "_root_video_eyeFov_0_left.description": "El lado izquierdo en grados",
    "_root_video_eyeFov_0_right.name": "Lado derecho",
    "_root_video_eyeFov_0_right.description": "El lado derecho en grados",
    "_root_video_eyeFov_0_top.name": "Lado superior",
    "_root_video_eyeFov_0_top.description": "La parte superior en grados",
    "_root_video_eyeFov_0_bottom.name": "Lado inferior",
    "_root_video_eyeFov_0_bottom.description": "La parte inferior en grados",
    "_root_video_eyeFov_1_eyeFov_1.name": "Ojo derecho",
    "_root_video_eyeFov_1_eyeFov_0.description": "Configuración para el ojo derecho",
    "_root_video_eyeFov_1_left.name": "Lado izquierdo",
    "_root_video_eyeFov_1_left.description": "El lado izquierdo en grados",
    "_root_video_eyeFov_1_right.name": "Lado derecho",
    "_root_video_eyeFov_1_right.description": "El lado derecho en grados",
    "_root_video_eyeFov_1_top.name": "Lado superior",
    "_root_video_eyeFov_1_top.description": "La parte superior en grados",
    "_root_video_eyeFov_1_bottom.name": "Lado inferior",
    "_root_video_eyeFov_1_bottom.description": "La parte inferior en grados",
    "_root_video_secondsFromVsyncToPhotons.name": "Segundos desde el VSync a la imagen del visor",
    "_root_video_secondsFromVsyncToPhotons.description": "El tiempo transcurrido desde el VSync virtual hasta que la imagen es visible en la pantalla del visor",
    "_root_video_ipd.name": "Distancia interpupilar",
    "_root_video_ipd.description": "La distancia entre los ojos medida desde el centro de las pupilas.",
    "_root_video_foveatedRendering.name": "Foveated rendering",
    "_root_video_foveatedRendering.description": "Técnica de renderizado que reduce la resolución de la imagen en la periferia de la visión para reducir la carga computacional de la GPU.",
    "_root_video_foveatedRendering_enabled.name": "Habilitar",
    "_root_video_foveatedRendering_enabled.description": `Técnica de renderizado que reduce la resolución de la 
    imagen en la periferia de la visión para reducir la carga computacional 
    de la GPU, la cantidad de datos a transmitir y la latencia.
     Este ajuste puede causar distorsión de la imagen en los bordes.`,
    "_root_video_foveatedRendering_content_strength.name": "Intensidad",
    "_root_video_foveatedRendering_content_strength.description": "Los valores más altos corresponden a menos detalles en los bordes de la imagen y más artefactos.",
    "_root_video_foveatedRendering_content_shape.name": "Relación de forma",
    "_root_video_foveatedRendering_content_shape.description": "La forma del rectángulo central a la resolución original",
    "_root_video_foveatedRendering_content_verticalOffset.name": "Desplazamiento vertical",
    "_root_video_foveatedRendering_content_verticalOffset.description": "Desplazamiento vertical del rectángulo central con la resolución original. Los valores positivos corresponden a un desplazamiento hacia abajo.",
    "_root_video_colorCorrection.name": "Corrección de color",
    "_root_video_colorCorrection.description": "Corrección de color",
    "_root_video_colorCorrection_enabled.name": "Habilitar",
    "_root_video_colorCorrection_enabled.description": "Las transformaciones de color se aplican en el siguiente orden: nitidez, gama, brillo, contraste y saturación.",
    "_root_video_colorCorrection_content_brightness.name": "Brillo",
    "_root_video_colorCorrection_content_brightness.description": "Brillo: -1 significa completamente negro y 1 significa completamente blanco.",
    "_root_video_colorCorrection_content_contrast.name": "Contraste",
    "_root_video_colorCorrection_content_contrast.description": "Contraste: -1 significa completamente gris.",
    "_root_video_colorCorrection_content_saturation.name": "Saturación",
    "_root_video_colorCorrection_content_saturation.description": "Saturación: -1 significa que la imagen está en blanco y negro.",
    "_root_video_colorCorrection_content_gamma.name": "Gama",
    "_root_video_colorCorrection_content_gamma.description": "Gama: Utilizar un valor de 2.2 para corregir el color de sRGB a RGB.",
    "_root_video_colorCorrection_content_sharpening.name": "Nitidez",
    "_root_video_colorCorrection_content_sharpening.description": "Nitidez: resalta los bordes de la imagen.",
    "_root_video_codec-choice-.name": "Códec de vídeo",
    "_root_video_codec-choice-.description": "Utilizar h265 si es posible para una mejor calidad de vídeo a velocidades de bits más bajas.",
    "_root_video_codec_H264-choice-.name": "h264",
    "_root_video_codec_H264-choice-.description": "Usar el códec h264",
    "_root_video_codec_HEVC-choice-.name": "HEVC (h265)",
    "_root_video_codec_HEVC-choice-.description": "Usar el códec HEVC (h265)",
    "_root_audio_gameAudio.name": "Transmitir el audio del juego",
    "_root_audio_gameAudio.description": "Transmitir el audio del juego al visor",
    "_root_audio_gameAudio_enabled.name": "sin usar",
    "_root_audio_gameAudio_enabled.description": "Permite la transmisión del audio del juego al visor",
    "_root_audio_gameAudio_content_deviceDropdown.name": "Elija su dispositivo de audio",
    "_root_audio_gameAudio_content_deviceDropdown.description": "Dispositivo utilizado para capturar el audio del juego",
    "_root_audio_gameAudio_content_device.name": "Código de dispositivo",
    "_root_audio_gameAudio_content_device.description": "Dispositivo utilizado para capturar el audio del juego",
    "_root_audio_microphone.name": "Micrófono de transmisión",
    "_root_audio_microphone.description": "Transmitir el audio del micrófono del visor al PC",
    "_root_headset_serialNumber.name": "Número de serie",
    "_root_headset_serialNumber.description": "Número de serie del visor simulado",
    "_root_headset_trackingSystemName.name": "Nombre del sistema de rastreo",
    "_root_headset_trackingSystemName.description": "Nombre del sistema de rastreo",
    "_root_headset_modelNumber.name": "Número de modelo",
    "_root_headset_modelNumber.description": "Número de modelo del visor simulado",
    "_root_headset_driverVersion.name": "Versión del controlador",
    "_root_headset_driverVersion.description": "Versión del controlador simulado",
    "_root_headset_manufacturerName.name": "Nombre de la empresa fabricante",
    "_root_headset_manufacturerName.description": "Nombre de la empresa fabricante del visor simulado",
    "_root_headset_renderModelName.name": "Nombre del modelo",
    "_root_headset_renderModelName.description": "Nombre del modelo del visor simulado",
    "_root_headset_registeredDeviceType.name": "Tipo de dispositivo registrado",
    "_root_headset_registeredDeviceType.description": "Tipo de dispositivo registrado",
    "_root_headset_trackingFrameOffset.name": "Offset de seguimiento",
    "_root_headset_trackingFrameOffset.description": "Offset de seguimiento del visor utilizado por el algoritmo de predicción de posición.",
    "_root_headset_positionOffset.name": "Offset espacial del visor",
    "_root_headset_positionOffset.description": "Offset espacial del visor",
    "_root_headset_positionOffset_0.name": "x",
    "_root_headset_positionOffset_0.description": "Offset X",
    "_root_headset_positionOffset_1.name": "y",
    "_root_headset_positionOffset_1.description": "Offset Y",
    "_root_headset_positionOffset_2.name": "z",
    "_root_headset_positionOffset_2.description": "Offset Z",
    "_root_headset_useTrackingReference.name": "Utilizar el sistema de referencia para el seguimiento",
    "_root_headset_useTrackingReference.description": "sin usar",
    "_root_headset_force3dof.name": "Modo 3DOF",
    "_root_headset_force3dof.description": "Forzar sólo 3 grados de libertad para el visor (sólo rotación)",
    "_root_headset_controllers.name": "Mandos",
    "_root_headset_controllers.description": "sin usar",
    "_root_headset_controllers_enabled.name": "Habilitar",
    "_root_headset_controllers_enabled.description": "Permitir el uso de mandos",
    "_root_headset_controllers_content_trackingSystemName.name": "Nombre del sistema de rastreo",
    "_root_headset_controllers_content_trackingSystemName.description": "Nombre del sistema de rastreo",
    "_root_headset_controllers_content_manufacturerName.name": "Nombre de la empresa fabricante",
    "_root_headset_controllers_content_manufacturerName.description": "Nombre de la empresa fabricante de los mandos simulados",
    "_root_headset_controllers_content_modelNumber.name": "Número de modelo",
    "_root_headset_controllers_content_modelNumber.description": "Número de modelo de los mandos simulados",
    "_root_headset_controllers_content_renderModelNameLeft.name": "Nombre del modelo (mando izquierdo)",
    "_root_headset_controllers_content_renderModelNameLeft.description": "Nombre del modelo de la representación visual del mando izquierdo",
    "_root_headset_controllers_content_renderModelNameRight.name": "Nombre del modelo (mando derecho)",
    "_root_headset_controllers_content_renderModelNameRight.description": "Nombre del modelo de la representación visual del mando derecho",
    "_root_headset_controllers_content_serialNumber.name": "Número de serie",
    "_root_headset_controllers_content_serialNumber.description": "Número de serie de los mandos simulados",
    "_root_headset_controllers_content_ctrlType.name": "Tipo de mando",
    "_root_headset_controllers_content_ctrlType.description": "Tipo de los mandos simulados",
    "_root_headset_controllers_content_registeredDeviceType.name": "Tipo de dispositivo registrado",
    "_root_headset_controllers_content_registeredDeviceType.description": "Nombre de los mandos simulados",
    "_root_headset_controllers_content_inputProfilePath.name": "Ruta de perfil de entrada",
    "_root_headset_controllers_content_inputProfilePath.description": "Ruta del archivo de perfil para la entrada del mando",
    "_root_headset_controllers_content_triggerMode.name": "Código de trigger",
    "_root_headset_controllers_content_triggerMode.description": "no usado",
    "_root_headset_controllers_content_trackpadClickMode.name": "Código de click trackpad",
    "_root_headset_controllers_content_trackpadClickMode.description": "no usado",
    "_root_headset_controllers_content_trackpadTouchMode.name": "Código de touch trackpad",
    "_root_headset_controllers_content_trackpadTouchMode.description": "no usado",
    "_root_headset_controllers_content_backMode.name": "Código de retorno",
    "_root_headset_controllers_content_backMode.description": "no usado",
    "_root_headset_controllers_content_recenterButton.name": "Código de recentrado",
    "_root_headset_controllers_content_recenterButton.description": "no usado",
    "_root_headset_controllers_content_poseTimeOffset.name": "Offset de predicción de mandos",
    "_root_headset_controllers_content_poseTimeOffset.description": "Offset utilizado por los mandos para el algoritmo de predicción.",
    "_root_headset_controllers_content_positionOffsetLeft.name": "Offset de posición",
    "_root_headset_controllers_content_positionOffsetLeft.description": "Compensación de la posición (en metros) del mando izquierdo. \nPara el mando derecho, se utiliza el opuesto del valor X.",
    "_root_headset_controllers_content_positionOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_positionOffsetLeft_0.description": "Offset X",
    "_root_headset_controllers_content_positionOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_positionOffsetLeft_1.description": "offset Y",
    "_root_headset_controllers_content_positionOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_positionOffsetLeft_2.description": "Offset Z",
    "_root_headset_controllers_content_rotationOffsetLeft.name": "Offset de rotación",
    "_root_headset_controllers_content_rotationOffsetLeft.description": "Desplazamiento de la rotación en grados para el mando izquierdo.\nPara el mando derecho, las rotaciones a lo largo de los ejes Y y Z se invierten.",
    "_root_headset_controllers_content_rotationOffsetLeft_0.name": "x",
    "_root_headset_controllers_content_rotationOffsetLeft_0.description": "Y rotación",
    "_root_headset_controllers_content_rotationOffsetLeft_1.name": "y",
    "_root_headset_controllers_content_rotationOffsetLeft_1.description": "Y rotación",
    "_root_headset_controllers_content_rotationOffsetLeft_2.name": "z",
    "_root_headset_controllers_content_rotationOffsetLeft_2.description": "Z rotación",
    "_root_headset_controllers_content_hapticsIntensity.name": "Intensidad de la retroalimentación táctil",
    "_root_headset_controllers_content_hapticsIntensity.description": "Factor para reducir o aumentar la intensidad de la vibración de los mandos.",
    "_root_headset_controllers_content_modeIdx.name": "Modo",
    "_root_headset_controllers_content_modeIdx.description": "Índice de modo del mando",
    "_root_connection_listenHost.name": "IP del servidor",
    "_root_connection_listenHost.description": "IP utilizada por el servidor para recibir paquetes",
    "_root_connection_listenPort.name": "Puerto del servidor",
    "_root_connection_listenPort.description": "Puerto utilizado por el servidor para recibir paquetes.",
    "_root_connection_throttlingBitrateBits.name": "Limitación de la tasa de bits",
    "_root_connection_throttlingBitrateBits.description": "Velocidad de bitrate máxima permitida en bits.",
    "_root_connection_sendingTimeslotUs.name": "Periodo de envío",
    "_root_connection_sendingTimeslotUs.description": "sin usar",
    "_root_connection_limitTimeslotPackets.name": "Limitar el período de envío",
    "_root_connection_limitTimeslotPackets.description": "sin usar",
    "_root_connection_clientRecvBufferSize.name": "Tamaño del buffer para el cliente",
    "_root_connection_clientRecvBufferSize.description": "Tamaño del buffer para el cliente.\nDepende de la tasa de bits.\nSe recomienda dejar el valor calculado. Si tiene problemas de pérdida de paquetes, aumente el valor.",
    "_root_connection_frameQueueSize.name": "Tamaño de la cola de cuadros",
    "_root_connection_frameQueueSize.description": "Tamaño máximo de la cola de fotogramas utilizado por el cliente.",
    "_root_connection_aggressiveKeyframeResend.name": "Reenvía los fotogramas clave de forma agresiva",
    "_root_connection_aggressiveKeyframeResend.description": `Reducir el intervalo de reenvío de los cuadros de tipo 'I' de 100ms a 5ms.
Sólo se utiliza cuando se detecta pérdida de paquetes. Mejora la experiencia visual en caso de pérdida de paquetes.`,
    "_root_extra_tab.name": "Extra",
    "_root_extra_revertConfirmDialog.name": "Confirmar los valores de restablecimiento",
    "_root_extra_revertConfirmDialog.description": "Pedir confirmación antes de restablecer los ajustes al valor predeterminado.",
    "_root_extra_restartConfirmDialog.name": "Confirmación de reinicio del SteamVR",
    "_root_extra_restartConfirmDialog.description": "Pedir confirmación antes de reiniciar el SteamVR.",
    "_root_extra_notificationLevel-choice-.name": "Grado de notificaciones",
    "_root_extra_notificationLevel-choice-.description": "Grado de registro con el que se genera una notificación.",
    "_root_extra_notificationLevel_warning-choice-.name": "Aviso",
    "_root_extra_notificationLevel_error-choice-.name": "Error",
    "_root_extra_notificationLevel_info-choice-.name": "Información",
    "_root_extra_notificationLevel_debug-choice-.name": "Debug",
    "_root_extra_excludeNotificationsWithoutId.name": "Excluir las notificaciones sin identificación",
    "_root_extra_excludeNotificationsWithoutId.description": "No mostrar notificaciones que no contengan la estructura de identificación.",
    "_root_connection_disableThrottling.name": "Deshabilitar los límites de envío",
    "_root_connection_disableThrottling.description": "Deshabilitar los límites de tiempo para el envío de paquetes.",
    "_root_connection_suppressFrameDrop.name": "Evitar la pérdida de paquetes",
    "_root_connection_suppressFrameDrop.description": "Trata de evitar la pérdida de paquetes.",
    "_root_headset_headsetEmulationMode.name": "Modo de emulación del visor",
    "_root_headset_headsetEmulationMode.description": "Elija el modo de emulación del visor para mejorar la compatibilidad con algunos juegos.",
    "_root_headset_controllers_content_controllerMode.name": "Modo de emulación del controlador",
    "_root_headset_controllers_content_controllerMode.description": "Elija el modo de emulación del controlador para mejorar la compatibilidad con ciertos juegos, y elija si desea activar la emulación del disparador con el seguimiento de la mano.",
    "_root_connection_bufferOffset.name": "Offset de buffer",
    "_root_connection_bufferOffset.description": "Offset utilizado para aumentar o disminuir el tamaño del buffer calculado para el cliente. El tamaño del buffer resultante nunca será negativo."
});