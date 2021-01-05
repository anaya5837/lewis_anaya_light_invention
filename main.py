while True:
    print("Light Level: " + input.light_level())
    if input.light_level() > 20 : 
        light.clear
    elif input.light_level() < 100:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    else:
        light.set_all(light.rgb(0, 0, 100))