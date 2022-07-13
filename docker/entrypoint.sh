if [ $(echo "$NODE_ENV")=="develop" ]
then
    npm run dev:mooc:backend
else
    npm run start:mooc:backend
fi

echo "`date`: 🤖 All ready boss!"