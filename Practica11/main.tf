provider "google" {
    credentials = file("practica-11-12-6f739f630297.json")
    project = "practica-11-12"
    region = "us-west1"
}

resource "random_id" "instance_id" {
    byte_length = 8  
}

//creacion de maquina virtual
resource "google_compute_instance" "default" {
    name = "practica11-${random_id.instance_id.hex}"
    machine_type = "f1-micro"
    zone = "us-west1-a"

    boot_disk {
        initialize_params {
          image = "debian-cloud/debian-9"
        }
    } 

    metadata_startup_script = " sudo apt-get update; sudo apt-get install -yq build-essential python-pip rsync; sudo apt install python-pip; pip install flask "

    network_interface {
      network = "default"
      access_config {
        //leer la ip publica

      }
    }

    metadata = {
      ssh-keys = "andrea:${file("C:\\Users\\Andrea/.ssh/id_rsa.pub")}"
    }
}


resource "google_compute_firewall" "default" {
  name = "practica11-python5000"
  network = "default"
  allow {
    protocol = "tcp"
    ports = [ "5000" ]
  }
}

output "ip" {
  value = google_compute_instance.default.network_interface.0.access_config.0.nat_ip
}
