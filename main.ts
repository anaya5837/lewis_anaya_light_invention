while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() <= 100) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(5)
    } else {
        light.setAll(light.rgb(250, 250, 250))
    }
    
}
