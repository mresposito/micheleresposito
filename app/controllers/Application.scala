package controllers

import play.api._
import play.api.mvc._

object Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def travel = Action {
    Ok(views.html.travel())
  }
  def people = Action {
    Ok(views.html.carosel("People"))
  }
  def life = Action {
    Ok(views.html.carosel("Life"))
  }
  def objects = Action {
    Ok(views.html.carosel("Objects"))
  }
}
