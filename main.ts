while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() > 100) {
        light.clear
    } else if (100 > input.lightLevel() && input.lightLevel() < 25) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(5)
    }
    
}
