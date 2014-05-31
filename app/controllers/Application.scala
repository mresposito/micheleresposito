package controllers

import play.api._
import play.api.mvc._
import com.typesafe.scalalogging.slf4j.Logging

object Application extends Controller with Logging {

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

  def redirect(url: String) = Action { implicit request => 
    val ip = request.remoteAddress
    logger.error(s"Ip address: ${ip}")
    val result = java.net.URLDecoder.decode(url, "UTF-8")
    Redirect(result) 
  }
}
