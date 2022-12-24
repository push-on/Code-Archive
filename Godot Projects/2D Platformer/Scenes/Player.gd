extends KinematicBody2D

var velocity = Vector2(0, 0)
const SPEED = 300
var GRAVITY = 35
const JUMPFORCE = -1000

func _physics_process(delta):
	if Input.is_action_pressed("right"):
		velocity.x = SPEED
		$Sprite.play("Walk")
		$Sprite.flip_h = false
	elif Input.is_action_pressed("left"):
		velocity.x = -SPEED
		$Sprite.play("Walk")
		$Sprite.flip_h = true
	else:
		$Sprite.play("Idle")
	if not is_on_floor():
		$Sprite.play("Jump")
	velocity.y += GRAVITY
	if Input.is_action_just_pressed("Jump") and is_on_floor():
		velocity.y = JUMPFORCE
	velocity = move_and_slide(velocity, Vector2.UP)
	velocity.x = move_toward(velocity.x, 0, SPEED)

func _on_Fall_Zone_body_entered(body):
	var i = get_tree().change_scene("res://Scenes/GameOver.tscn")


func bounce():
	velocity.y = JUMPFORCE * 0.7

func enemeHit(var EnmeyPosX):
	set_modulate(Color(1,0.3,0.3,1))
	velocity.y = JUMPFORCE * 0.5
	if position.x < EnmeyPosX:
		velocity.x = -800
	elif position.x > EnmeyPosX:
		velocity.x = 800
	Input.action_release("left")
	Input.action_release("right")
	Input.action_release("Jump")
	$Timer.start(0.5)

func _on_Timer_timeout():
	get_tree().change_scene("res://Scenes/GameOver.tscn")
