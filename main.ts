while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() >= 16) {
        light.clear
    } else if (input.lightLevel() <= 15) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(5)
    }
    
}
