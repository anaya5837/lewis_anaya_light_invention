while True:
    print("Light Level: " + input.light_level())
    if input.light_level() > 50 : 
        light.clear
    elif input.light_level() < 25:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    