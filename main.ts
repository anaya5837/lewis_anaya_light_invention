while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() <= 230) {
        light.clear
    } else if (input.lightLevel() < 220) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(5)
    } else if (input.lightLevel() <= 10) {
        light.clear
    } else {
        light.setAll(light.rgb(0, 0, 100))
    }
    
}
