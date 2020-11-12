//var collider = [];

function bounceOff(sprite1,sprite2)
{
  if (collider[sprite1].x - collider[sprite2].x < collider[sprite2].width/2 + collider[sprite1].width/2
    && collider[sprite2].x - collider[sprite1].x < collider[sprite2].width/2 + collider[sprite1].width/2) 
    {
      sprite1.velocityX = sprite1.velocityX * (-1);
      sprite2.velocityX = sprite2.velocityX * (-1);
    }
    if (collider[sprite1].y - collider[sprite2].y < collider[sprite2].height/2 + collider[sprite1].height/2
      && collider[sprite2].y - collider[sprite1].y < collider[sprite2].height/2 + collider[sprite1].height/2)
    {
      sprite1.velocityY = sprite1.velocityY * (-1);
      sprite2.velocityY = sprite2.velocityY * (-1);
    }
}

function isTouching(sprite1,sprite2)
{
  if (collider[sprite1].x - collider[sprite2].x < collider[sprite2].width/2 + collider[sprite1].width/2
    && collider[sprite2].x - collider[sprite1].x < collider[sprite2].width/2 + collider[sprite1].width/2) 
    {
      return true;
    }
    else
    {
      return false;
    }
    if (collider[sprite1].y - collider[sprite2].y < collider[sprite2].height/2 + collider[sprite1].height/2
      && collider[sprite2].y - collider[sprite1].y < collider[sprite2].height/2 + collider[sprite1].height/2)
    {
      return true;
    }
    else
    {
      return false;
    }
}

function setCollider(sprite,type,xOffset,yOffset,width,height)
{
    var colliderX,colliderY
    if(type == "rectangle")
    {
        colliderX = sprite.x + xOffset;
        colliderY = sprite.y + yOffset;

        collider[sprite] = createSprite(colliderX,colliderY,width,height);
        collider[sprite].shapeColor = "white"
    }
}