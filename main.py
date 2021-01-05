while True:
    print("Light Level: " + input.light_level())
    if input.light_level() <= 10:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(5)
    else:
        light.clear
        light.set_brightness(5)