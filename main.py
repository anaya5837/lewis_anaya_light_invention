while True:
    print("Light Level: " + input.light_level())
    if input.light_level() <= 5: 
        light.clear
    elif 1 <= input.light_level() < 25:
        light.set_all(light.rgb(250, 250, 250))
        light.set_brightness(50)
    elif input.light_level() >= 25:
        light.clear
    else:
        light.set_all(light.rgb(0, 0, 100))