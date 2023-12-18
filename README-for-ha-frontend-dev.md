Changed to '/workspaces/home-assistant/.devcontainer/devcontainer.json':

```json
  "mounts": [
    "source=/Users/gpeeters/work/personal/cards,target=/workspaces/home-assistant/config,type=bind,consistency=cached"
  ],
 ```

Commands after updating homeassistant frontend container:
```bash
cd /workspaces/home-assistant/config
wget -O - https://get.hacs.xyz | bash -
cd /workspaces/home-assistant/config/www/cards/power-distribution/
sudo apt -y update
sudo apt -y install npm inetutils-ping
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
npm install
```
copy ssh keys:
on mac:
```bash
cp ~/.ssh/id_rsa* ~/work/personal/cards/www/cards
```
in container:
```bash
mv ../id_rsa* ~/.ssh
git push --set-upstream cancas main
```

test comamnds:
```bash
npm run build
npm run watch
```

Bundling:
```bash
npm run build && npm run deploy
```