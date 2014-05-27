#!/usr/bin/env python

import os
import subprocess

def findImageSize(img):
  out = subprocess.Popen(['convert', img, '-print', \
    '"{%wx%h}\n"', '/dev/null/]'], stderr=subprocess.PIPE,
    stdout=subprocess.PIPE).communicate()[0]

  try:
    desc = out.split("{")[1].split("}")[0]
    return map(int, desc.split("x"))
  except:
    return None

def hasToResize(img):
  size = findImageSize(img)
  print size
  return size != None and size[0] > 1800

def downsize(img):
  tmp = "tmp.jpg"
  subprocess.call(["convert", img, "-scale", "80%", tmp])
  subprocess.call(["mv", tmp, img])

def resize(img):
  if(hasToResize(img)):
    while(hasToResize(img)):
      downsize(img)

def resizer(path):
  for dirname, dirnames, filenames in os.walk(path):
    fullImg = map(lambda x:os.path.join(path, x), filenames)
    map(resize, fullImg)

    for dirname in dirnames:
      print dirname
      fullPath = os.path.join(path, dirname)
      resizer(fullPath)

def main():
  start = os.path.realpath(__file__) 
  head, tail = os.path.split(start)
  resizer(head)

if __name__ == '__main__':
  main()
