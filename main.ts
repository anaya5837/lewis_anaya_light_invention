while (true) {
    console.log("Light Level: " + input.lightLevel())
    if (input.lightLevel() <= 200) {
        light.clear
    } else if (105 >= input.lightLevel() && input.lightLevel() < 200) {
        light.setAll(light.rgb(250, 250, 250))
        light.setBrightness(5)
    } else if (input.lightLevel() >= 150) {
        light.clear
    } else {
        light.setAll(light.rgb(0, 0, 100))
    }
    
}
