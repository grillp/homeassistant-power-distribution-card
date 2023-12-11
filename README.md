Changed to '/workspaces/home-assistant/.devcontainer/devcontainer.json':

```json
  "mounts": [
    "source=/Users/gpeeters/work/personal/cards,target=/workspaces/home-assistant/config/www/cards,type=bind,consistency=cached"
  ],
 ```

Commands after updating container


```bash
cd config/www/cards/tesla-power-distribution/
sudo apt -y update
sudo apt -y install npm inetutils-ping
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
npm install
```

test comamnds:
```bash
npm run build
```