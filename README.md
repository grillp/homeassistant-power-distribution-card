# power-distribution card

This is a [home-assistant](home-assistant.io) card for people who have electricity generation and storage in their home. While the Home Assistant Energy Integration contains a great view to see how much energy (in kWh) has been distributed throughout the day, I was missing the kind of view that shows how the power (in kW) was being distributed around my house right now!

![power-distribution-card-animation](images/power-distribution.gif)

### Attribution:
This card was inspired by the home-assistant [Energy Distribution](https://www.home-assistant.io/dashboards/energy/#energy-distribution) card as well as the [tesla-style-solar-power-card](https://github.com/reptilex/tesla-style-solar-power-card) card plugin.

- The look and feel are obviously inspired by the home-assistant card.
- The configuration, additional equipment, and customisability are inspired by [@reptilex](https://github.com/reptilex)'s card.

### Table of contents
* [Overview](#overview)
* [HACS-Installation](#hacs-installation)
* [Usage](#usage)
* [Missing Sensors?](#missing-sensors)
* [Tesla Powerwall Usage](#tesla-powerwall-usage)
* [Contributing](#contributing)

## Overview
I have made this as generic as possible.

There are 6 elements in all.

There are 4 for the main elements types of a home energy system:
  - **Grid** - This is power coming into, or going back into the electricity grid
  - **Load** - This is the power being used by your system. typically this would be your 'Home', but could be a 'Factory'
  - **Generation** - This is all the combined power being generated by your system. Typically 'Solar', but could be 'Wind' if you have a wind generator, or something not so sustainable like a Diesel generator.
  - **Storage** Typically a battery

There are also 2 additional _Load_ type elements that can be shown. These can be used to show the power flow to specific high energy devices or components in your system. e.g. an EV, or an oven etc.

They are:
  - **Load Top**
  - **Load Bottom**

The _Top_ and _Bottom_ only signify where they visually appear, either on top of, or below the **Load** element

>**Note:**
>- All the element names shown above are also used as the default titles for the elements, but these can be changed in trough configuration (see xxxx).

### Flows

The lines between the elements represent the flow of Power between elements. When there is Power flowing between elements, a circle moves along the line to represent flow direction and the speed of the ball represents the amount of power, relative to the other flows.

The power that flows between each element is defined in configuration through 9 flow definitions. You can define as few or as many flows as you need, depending on your use case, with the only mandatory flow being 'grid to load', as usually that is the least that people have in their home. Sorry to all those that are completely off-grid!

The flows are configured by assigning entities to each flow (or a number. see below):

  - grid_to_load_power_id
  - generation_to_grid_power_id
  - generation_to_storage_power_id
  - generation_to_load_power_id
  - storage_to_load_power_id
  - storage_to_grid_power_id
  - load_top_power_id
  - load_bottom_power_id

>**Flow configuration:**
>- If an entity is configured for a flow it should represent a positive numeric power value in Kw.
>
>- The card's graphical editor only allows selection of entities that are:
>   - type: _sensor_
>   - class: _power_
>   - unit of measure: _Kw_
>- You can configure any elements in the YAML editor, with unpredictable results if they do not deliver positive numeric numbers.
>- You can also configure a static number for a flow to represent constant flow (e.g 0 (zero) if you have no flow and still want to show an element, or a fixed number).

### Elements

Each element will, at a minimum, display the sum of all power flowing into and out of the element. again, in KW and an icon for the element.

![power-distribution-element](images/power-distribution-element.jpg)

#### Load Element
The Load element also shows where the power being consumed comes from buy adjusting the colours around the Load elements circle. The proportion of each colour directly correlates the the proportion of the source of the power.

#### Element Configuration

Each of the elements has a number of configuration options. These include:
- Title
- Icon
- Extra information

Each of these can be set for each element type in the configuration

##### Title

This is what is shown above (or below in some cases) the element's 'circle'.

You can set this with the elements corresponding elements `<element>_title` configuration setting.

- This can be either an entity id or a fixed string value
- If you use an entity id it will show the entity's formatted state
- If the string is empty or not configured, it will not be shown

>**Note:**
>- Default values are assigned in the standard configuration that match the names shown above.
>- You will also note that if you change the title of an entity, the graphical editor will also change any prompts that use that entity title to represent what you enter here. If no value is entered, once again the default names will be used in the graphical editor.
>- e.g if you entered a value of 'Solar' for the Generation entity title, the prompt for the generation_to_battery flow will change from `Generation → Battery` to `Solar → Battery`. The prompts for Icons and Extra Info will also change to represent the new title value.

##### Icon
This is the icon that is displayed for the element. Each element has a default icon, but can be changed

You can set this with the elements corresponding elements `<element>_icon` configuration setting.

This takes a `string` value (or use the Icon Picker in the visual editor) in the standard icon format of `mdi:<icon-identifier>`

##### Extra Information
This is the text that appears above the icon in the element circle.

You can set this with the elements corresponding elements `<element>_extra_info` configuration setting.

- This can be either an entity id or a fixed string value
- If you use an entity id it will show the entity's formatted state
- If the string is empty or not configured, it will not be shown

### Elements and Flow Visibility

The visibility of the `Generation`, `Battery`, `Load Top` and `Load Bottom` elements and their associated flows change based on the flows configured.

That is, if an element has no flows configured from or to it, it and its flows will be hidden.

If you define a single flow from or to an element, the element and all its flows will be shown.

>**Note:**
>- When you first add the card to a panel, only the `Grid` and `Load` elements are shown, as no flows have been configured
>- Element visibility also affects the fields that are visible in the visual editor for the card.
>- e.g if no flows are defined either into or out of the `Generation` element, the entry fields to set the `Title`, `Icon`, and `Extra Info` for the `Generation` element will not be visible. You will first need to configure one or more flows that include the `Generation` element before you can configure that element's additional values

# HACS-Installation
### !!COMING SOON!!
1. [Install HACS](https://hacs.xyz/docs/installation/installation) if you don't have it yet
2. When installed go to HACS->Frontend->Explore & add repositories
3. Search for `power distribution`
4. Click on the `power-distribution-card`
5. Install repository
6. Restart HA

### Manual Installation (HACS will do all this for you)
1. Add the `power-distribution.js` file from the repository under your Home Assistant configuration in the `www` folder (create one if you don't have it yet).
2. Add a resource under Lovelace (you have to enable Advanced Mode in your user profile to see the resource tab) by navigating to the `Settings > Dashbaords` page and clicking on the hanburger icon in the top righ of the screen and selecting `Resources`. Then add a resource where:
    - The URL should be `local\www\power-distribution.js`
    - The Resource Type should be `javascript`
3. Restart Home Assistant.
4. Add a manual card with the Lovelace GUI and configure as seen below.

# Usage

## Simplest Configuration

You have a house (Load) and you are connected to your local electricity grid (Grid). You also have a `sensor` that shows the power (in kW!) coming into your house. You are good to go!

```YAML
type: custom:power-distribution
grid_to_load_power_id: sensor.power_flow_grid_to_house_entity
```

That's all you need to get this:

![power-distribution-simplest](images/power-distribution-simplest.png)

## All the bells and whistles!

A full configuration file with all options used would look like this:

```YAML
type: custom:power-distribution
# The card title
card_title: Power Distribution
# Element titles
grid_title: Zap Inc.
generation_title: Wind
storage_title: Big Battery
load_title: House
load_top_title: Big EV
load_bottom_title: Robots
# Info (note mix of entities and strings)
grid_to_load_power_id: sensor.power_flow_grid_to_house_entity
generation_to_grid_power_id: sensor.power_flow_generation_to_grid_entity
generation_to_storage_power_id: sensor.power_flow_generation_to_battery_entity
generation_to_load_power_id: sensor.power_flow_generation_to_house_entity
storage_to_load_power_id: sensor.power_flow_battery_to_house_entity
storage_to_grid_power_id: sensor.power_flow_battery_to_grid_entity
load_top_power_id: sensor.blue_bik_charger_power
load_bottom_power_id: '1.1'
# Info (note mix of entities and strings)
grid_info_id: sensor.mytpw_general_price
load_info_id: sensor.ww_temperature
storage_info_id: sensor.mytpw_charge
load_top_info_id: sensor.blue_bik_battery
generation_info_id: Force 5
load_bottom_info_id: Active
# icons
grid_icon: mdi:lightning-bolt-outline
load_icon: mdi:factory
generation_icon: mdi:wind-power
storage_icon: mdi:car-battery
load_top_icon: mdi:car
load_bottom_icon: mdi:robot-angry
```

Which would get you something like this:

![power-distribution-full](images/power-distribution-full.png)

## All configuration Options

|Key (*=required)               | Type                 | Description
|:------------------------------- |:-------------------- |:-------------------
|`card_title`                     | string               | The card's title
| **Flows**
|`grid_to_load_power_id`**\***    | entity id <br>string | The power from Grid to Load         <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`generation_to_grid_power_id`    | entity id <br>string | The power from Generation to Grid   <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`generation_to_storage_power_id` | entity id <br>string | The power from Generation to Storage<br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`generation_to_load_power_id`    | entity id <br>string | The power from Generation to Load   <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`storage_to_load_power_id`       | entity id <br>string | The power from Storage to Load      <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`storage_to_grid_power_id`       | entity id <br>string | The power from Storage to Grid      <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`load_top_power_id`              | entity id <br>string | The power from Load to Load Top     <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
|`load_bottom_power_id`           | entity id <br>string | The power from Load to Load Bottom  <br> - Unit: kW.<br> - Must result in a positive numeric value or zero
| **Element Titles**
|`grid_title`                     | string               | Grid element Title                  <br> - Not shown if empty
|`generation_title`               | string               | Generation element Title            <br> - Not shown if empty
|`storage_title`                  | string               | Storage element Title               <br> - Not shown if empty
|`load_title`                     | string               | Load element Title                  <br> - Not shown if empty
|`load_top_title`                 | string               | Load Top element Title              <br> - Not shown if empty
|`load_bottom_title`              | string               | Load Bottom element Title           <br> - Not shown if empty
| **Element Info**
|`grid_info_id`                   | entity id <br>string | Grid element Extra Info             <br> - Entity state if a valid entity id, or literal string value if not |
|`storage_info_id`                | entity id <br>string | Generation element Extra Info       <br> - Entity state if a valid entity id, or literal string value if not |
|`load_info_id`                   | entity id <br>string | Storage element Extra Info          <br> - Entity state if a valid entity id, or literal string value if not |
|`generation_info_id`             | entity id <br>string | Load element Extra Info             <br> - Entity state if a valid entity id, or literal string value if not |
|`load_top_info_id`               | entity id <br>string | Load Top element Extra Info         <br> - Entity state if a valid entity id, or literal string value if not |
|`load_bottom_info_id`            | entity id <br>string | Load Bottom element Extra Info      <br> - Entity state if a valid entity id, or literal string value if not |
| **Element Icons**
|`grid_icon`                      | string               | Grid element icon                   <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:transmission`
|`generation_icon`                | string               | Generation element icon             <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:solar-power`
|`storage_icon`                   | string               | Storage element icon                <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:battery-high`
|`load_icon`                      | string               | Load element icon                   <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:home`
|`load_top_icon`                  | string               | Load Top element icon               <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:car-sports`
|`load_bottom_icon`               | string               | Load Bottom element icon            <br> - Format: `mdi:<icon-id>`<br>- Default: `mdi:car-sports`


# Missing Sensors?


If you are missing any sensors for the flows, you probably create your own using sensor templates and the energy sensors you have available already. It all depend on what integrations you have for your various energy entities/devices.

Just ensure your new template sensors:
- provides only positive numeric values for power in the direction of the flow specified (e.g. generation-to-battery will be a positive number showing how many kW are being delivered from the generation element to the battery).
- return values in kW

If you want to be able to select them from the Graphical Editor ensure they are:
   - type: _sensor_
   - class: _power_
   - unit of measure: _kW_

```YAML
    gen_to_bat_power:
        value_template: '{% set gen_to_bat = (states('sensor.some_power') | float) - (states()'sensor.some_other_power') | float) %}
                        {% if gen_to_bat > 0 %}
                            {{ gen_to_bat | float }}
                        {% else %}
                            0
                        {% endif %}'
        device_class: power
        unit_of_measurement: kW
```

# Tesla-Powerwall Usage

I am fortunate enough to have a Tesla PowerWall 2 with the new version of the controller.

The [Tesla Powerwall integration](https://www.home-assistant.io/integrations/powerwall/) provides enough sensors to show total energy use of all the elements in my system as well as the current power used or produced by each element.

However, this card needs the power for specific flows, and we can use template sensors to create those values from the ones provided by the Tesla Powerwall integration.

>**Note**
>- The below examples use the sensor names provided for my Tesla Powerwall integration configuration. They all start with `sensor.mytpw_`. Make sure you change these values to suit your own configuration.
>- The example below **does not** include flow from the grid to battery or vice versa. In my situation, I don't need this as I don't do battery load shifting.  I can add those if someone really needs it.
A more complete example of template sensors for the Tesla Power Wall can be found in the [tesla-style-solar-power-card](https://github.com/reptilex/tesla-style-solar-power-card#tesla-powerwall-usage) documentation.
>- You can scrap the `unique_id:` configuration variable. I use them so that I can move the sensors into an Area.

```YAML
template:
  - sensor:
    power_flow_grid_to_house_entity:
      value_template: "{{ (max([(states('sensor.mytpw_site_power')|float), 0.0])) | float}}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-014d123543
    power_flow_grid_to_battery_entity:
      value_template: "{{ 0 }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-014d123543
    power_flow_generation_to_grid_entity:
      value_template: "{{ (states('sensor.mytpw_site_power') | float * -1) if ((states('sensor.mytpw_site_power') | float < 0)) else 0 }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-034d123543
    power_flow_generation_to_battery_entity:
      value_template: "{{ (states('sensor.mytpw_battery_power') | float * -1) if ((states('sensor.mytpw_battery_power') | float < 0)) else 0 }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-044d123543
    power_flow_generation_to_house_entity:
      value_template: "{{ (states('sensor.mytpw_solar_power') | float) + (min([states('sensor.mytpw_battery_power')|float,0])) + (min([states('sensor.mytpw_site_power')|float,0])) }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-054d123543
    power_flow_battery_to_house_entity:
      value_template: "{{ max([0,states('sensor.mytpw_battery_power') | float])  }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-064d123543
    power_flow_battery_to_grid_entity:
      value_template: "{{ 0 }}"
      device_class: power
      unit_of_measurement: kW
      unique_id: b12cae24-8b57-11ed-a1eb-074d123543
```

After you've included these sensors, then you can configure the card like this:

```YAML
type: 'custom:tesla-style-solar-power-card'
grid_to_load_power_id: sensor.power_flow_grid_to_house_entity
generation_to_grid_power_id: sensor.power_flow_generation_to_grid_entity
generation_to_storage_power_id: sensor.power_flow_generation_to_battery_entity
generation_to_load_power_id: sensor.power_flow_generation_to_house_entity
storage_to_load_power_id: sensor.power_flow_battery_to_house_entity
storage_to_grid_power_id: sensor.power_flow_battery_to_grid_entity
```

## Releases

None Yet

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT License (see [here](LICENSE))