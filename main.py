while True:
    print("Light Level: " + input.light_level())
    if input.light_level() > 100 : 
        light.clear
    elif 100 > input.light_level() < 25:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    