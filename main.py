while True:
    print("Light Level: " + input.light_level())
    if input.light_level() <= 230: 
        light.clear
    elif input.light_level() < 220:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    elif input.light_level() <= 10:
        light.clear
    else:
        light.set_all(light.rgb(0, 0, 100))