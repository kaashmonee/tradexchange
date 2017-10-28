//
//  ViewController.swift
//  TradeXchange
//
//  Created by Tommy Jiang on 10/28/17.
//  Copyright © 2017 Tommy Jiang. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var label: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        let hello = "hello!"
        
        struct request {
            let a = ""
            let b = true
        }
    }

    @IBAction func smile(_ sender: Any) {
        
        label.text = "😍"
        
        greetMe()
        
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

extension ViewController {
    
    
    func greetMe() {
        print("😍")
    }
}
