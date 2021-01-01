while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() <= 5) {
        light.clear
    } else if (1 <= input.lightLevel() && input.lightLevel() < 25) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(50)
    } else if (input.lightLevel() >= 25) {
        light.clear
    } else {
        light.setAll(light.rgb(0, 0, 100))
    }
    
}
